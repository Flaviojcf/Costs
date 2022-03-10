import styles from './/NewProject.module.css'
import ProjectForm from '../../Projects/ProjectForm'
import {useNavigate} from 'react-router-dom'
function NewProject() {

    const navigate = useNavigate()

    function createPost(project) {
        project.cost = 0
        project.services =[]

        fetch('http://localhost:5000/projects',{
            method:'POST',
            headers:{
                'Content-type':'application/json',
            },
                body: JSON.stringify(project),
            
        }).then((resp) => resp.json()).then((data) => {
            console.log(data)
            navigate('/projects', {message:'Projeto criado'})
        }).catch((err) => console.log(err))
    }
  


    return (
        <div className={styles.newProjectContainer}>
            <h1>Criar projeto</h1>
            <p>Crie seu projeto e posteriormente adicione o serviço</p>
            <ProjectForm handleSubmit={createPost} btnText='Criar Projeto'/>
        </div>
    )
}

export default NewProject