import styles from ".//Edit.module.css";
import {parse, v4 as uuidv4} from 'uuid';
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Loading from "../Loading/Loading";
import Container from "../layout/Container/Container";
import ProjectForm from "../Projects/ProjectForm";
import Message from "../Message/Message";
import ServiceForm from "../ServiceForm/ServiceForm";
import ServiceCard from "../ServiceCard/ServiceCard";

export default function Edit() {
  const {id} = useParams();
  const [edit, setEdit] = useState([]);
  const [showProjectForm, setShowProjectform] = useState(false);
  const [showServiceForm, setShowServiceForm] = useState(false);
  const [message, setMessage] = useState();
  const [type, setType] = useState();
  const [services, setServices] = useState([]);
  

  useEffect(() => {
    setTimeout(() => {
      fetch(`http://localhost:5000/projects/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((resp) => resp.json())
        .then((data) => {
          setEdit(data);
          setServices(data.services)
        })
        .catch((err) => console.log(err));
    }, 300);
  }, [id]);

  function editPost(edit) {
  

    if (edit.valueTotal < edit.cost) {
      setMessage("Orçamento precisa ser maior que o custo do projeto");
      setType("error");
      return false;
    }

    fetch(`http://localhost:5000/projects/${edit.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(edit),
    })
      .then((resp) => resp.json())
      .then((data) => {
        setEdit(data);
        setShowProjectform(false);
        setMessage("Projeto atualizado");
        setType("success");
      })
      .catch((err) => console.log(err));
  }

  function createService(edit) {
    setMessage("");

    const lastService = edit.services[edit.services.length -1]
    lastService.id = uuidv4()
    const lastServiceCost = lastService.cost

    const newCost = parseFloat(edit.cost) + parseFloat(lastServiceCost)

    if (newCost > parseFloat(edit.valueTotal)) {
        setMessage('Orçamento ultrapassado')
        setType('error')
        edit.services.pop()
        return false
    }

    edit.cost = newCost

    fetch(`http:localhost:5000/projects/${edit.id}`, {
        method:'PATCH',
        headers: {
            'Content-Type':'application/json'
        },
        body:JSON.stringify(edit)
    })
    .then((res) =>res.json())
    .then((data)=> {
        setShowServiceForm(false)
    })
    .catch((err) => console.log(err))
  }


  function removeService () {
    
  }

  function toggleProjectForm() {
    setShowProjectform(!showProjectForm);
  }

  function toggleServiceForm() {
    setShowServiceForm(!showProjectForm);
  }

  console.log(id);
  return (
    <>
      {edit.name ? (
        <div className={styles.editDetails}>
          <Container customClass="column">
            {message && <Message type={type} msg={message} />}
            <div className={styles.detailsContainer}>
              <h1>Projeto: {edit.name}</h1>
              <button className={styles.btn} onClick={toggleProjectForm}>
                {!showProjectForm ? "Editar Projeto" : "Fechar"}
              </button>
              {!showProjectForm ? (
                <div className={styles.editInfo}>
                  <p>
                    <span>Categorias:</span> {edit.category.name}
                  </p>
                  <p>
                    <span>Total de orçamento:</span> R${edit.valueTotal}
                  </p>
                  <p>
                    <span>Total utilizado:</span> R${edit.cost}
                  </p>
                </div>
              ) : (
                <div className={styles.editInfo}>
                  <ProjectForm
                    handleSubmit={editPost}
                    btnText="Concluir edição"
                    projectData={edit}
                  />
                </div>
              )}
            </div>
            <div className={styles.serviceFormContainer}>
              <h2>Adicione um serviço</h2>
              <button className={styles.btn} onClick={toggleServiceForm}>
                {!showServiceForm ? "Adicionar serviço" : "Fechar"}
              </button>
              <div className={styles.editInfo}>
                  {showServiceForm && (
                     <ServiceForm handleSubmit={createService} 
                                  btnText='Adicionar Serviço'
                                  projectData={edit}/>
                  )}
              </div>
            </div>
            <h2>Serviços</h2>
            <Container customClass='start'>
                   {services.length > 0  && 
                   services.map((service) => (
                     <ServiceCard
                            key={service.id}
                            id={service.id}
                            name={service.name}
                            cost={service.cost}
                            description={service.description}
                            handleRemove={removeService}/>
                   ))}
                   {services.length === 0 && <p>Sem serviços</p>}
            </Container>
          </Container>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}
