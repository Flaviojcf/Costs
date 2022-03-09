import styles from './/NewProject.module.css'
import ProjectForm from '../../Projects/ProjectForm'

function NewProject() {
    return (
        <div className={styles.newProjectContainer}>
            <h1>Criar projeto</h1>
            <p>Crie seu projeto e posteriormente adicione o serviço</p>
            <ProjectForm btnText='Criar Projeto'/>
        </div>
    )
}

export default NewProject