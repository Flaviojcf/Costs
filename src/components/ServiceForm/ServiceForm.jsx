import { useState } from 'react'
import styles from '../../components/Projects/ProjectForm.module.css'
import Input from '../Input/Input'
import SubmitButton from '../SubmitButton/SubmitButton'


export default function ServiceForm({handleSubmit, btnText, projectData}) {

    const [service, setService] = useState({})

    function submit(e) {
        e.preventDefault()
        projectData.services.push(service)
        handleSubmit(projectData)
    }

    function handleChange(e) {
        setService({...service,[e.target.name]: e.target.value})
    }

    return (
        <form onSubmit={submit} className={styles.form}>
            <Input 
                type='text'
                text='Nome do serviço'
                name='name'
                placeholder='Insira um nome de serviço'
                handleOnChange = {handleChange}
            />
            <Input 
                type='text'
                text='Custo do serviço'
                name='cost'
                placeholder='Insira o valor Total'
                handleOnChange = {handleChange}
            />
            <Input 
                type='text'
                text='Descrição do serviço'
                name='description'
                placeholder='Descreva o serviço'
                handleOnChange = {handleChange}
            />
        <SubmitButton text={btnText} />
        </form>

    )
}

