import Message from "../../Message/Message"
import { useLocation } from "react-router-dom"
import styles from './/Projects.module.css'
import Container from "../../layout/Container/Container"
import LinkButton from "../../layout/LinkButton/LinkButton"
import ProjectCard from "../../ProjectCard/ProjectCard"
import { useEffect, useState } from "react"
import Loading from "../../Loading/Loading"


function Projects() {

    const [projects, setProjects] = useState([])
    const [removeLoading, setRemoveLoading] = useState(false)
    const [projectMessage, setProjectMessage] = useState('')

    const location = useLocation()
    let message = ''
    if(location.state) {
        message = location.state.message
    }

    useEffect(()=>{
        setTimeout(()=>{
            fetch("http://localhost:5000/projects", {
            method:"GET",
            headers: {
                'Content-Type': 'aplication/json',
            },
        }).then((resp) => resp.json()).then((data) =>{
                setProjects(data)
                setRemoveLoading(true)
        }).catch((err) => console.log(err))
        },200)
    },[])

    function removeProject(id) {
        fetch(`http://localhost:5000/projects/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type':'application/json'
            },
        }).then((resp)=>resp.json())
        .then((data)=> {
            setProjects(projects.filter((project)=> project.id !== id))
            setProjectMessage('Projeto removido')
        })
        .catch((err)=> console.log(err))
    }


    return (
        <div className={styles.projectContainer}>
            <div className={styles.titleContainer }>
                <h1>Meus orçamentos</h1>
               <LinkButton to='/newproject' text='Criar projeto'/>
            </div>
            {message && <Message type='success' msg={message} />}
            {projectMessage && <Message type='success' msg={projectMessage} />}
            <Container customClass="start" >
               { projects.length > 0 &&
                    projects.map((project)=> 
                        <ProjectCard 
                        key={project.id} 
                        id={project.id} 
                        name={project.name} 
                        budget={project.valueTotal} 
                        category={project.category.name}
                        handleRemove={removeProject}
                        />
                    )}
                    {!removeLoading && <Loading/>}
                    {removeLoading && projects.length === 0 &&
                        <p>Não há projetos cadastrados</p>
                    }
            </Container>
        </div>
    )
}

export default Projects