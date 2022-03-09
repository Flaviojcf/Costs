import Input from "../Input/Input"
import Select from "../Select/Select"
import SubmitButton from "../SubmitButton/SubmitButton"
import styles from ".//ProjectForm.module.css"
function ProjectForm({btnText}) {
    return (
        <form className={styles.form}>
            <Input type='text'
                    text='Nome do projeto'
                    name='name'
                    placeholder='Insira o nome do projeto'
                    />
           <Input type='number'
                    text='Valor do projeto'
                    name='Valor total'
                    placeholder='Insira o orçamento do projeto'
                    />
            <div>
                <Select name='categoryId' text='Selecione a categoria' />
            </div>
            <div>
               <SubmitButton text={btnText} />
            </div>
            </form>
    )
}

export default ProjectForm