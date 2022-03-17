import Input from "../Input/Input"
import Select from "../Select/Select"
import SubmitButton from "../SubmitButton/SubmitButton"
import styles from ".//ProjectForm.module.css"
import {useState,useEffect} from "react";
function ProjectForm({btnText, handleSubmit,projectData}) {

    const [categories,setCategories] = useState([])
    const [project,SetProject] = useState(projectData || {})

    useEffect(()=>{
        fetch("http://localhost:5000/categories", {
            method:"GET",
            headers: {
                'Content-Type': 'aplication/json',
            },
        }).then((resp) => resp.json()).then((data) =>{
                setCategories(data)
        }).catch((err) => console.log(err))
    },[])

    const submit = (e) => {
        e.preventDefault()
        handleSubmit(project)
    }

    function handleChange(e) {
        SetProject({...project, [e.target.name]: e.target.value}) 
    }

    function handleCategory(e) {
        SetProject({...project, category : {
            id: e.target.value,
            name:e.target.options[e.target.selectedIndex].text,
            
        } 
    })
    }

return (
        <form onSubmit={submit} className={styles.form}>
            <Input 
                    type='text'
                    text='Nome do projeto'
                    name='name'
                    placeholder='Insira o nome do projeto'
                    handleOnChange={handleChange}
                    value={project.name ? project.name : '' }
                    />
                    
           <Input
                    
                    type='number'
                    text='Valor do projeto'
                    name='valueTotal'
                    placeholder='Insira o orçamento do projeto'
                    handleOnChange={handleChange}
                    value={project.valueTotal? project.valueTotal : '' }
                    />
            <div>
                <Select name='categoryId' 
                        text='Selecione a categoria'
                        options={categories} 
                        handleOnChange={handleCategory}
                        value={project.category? project.category.id : ''}/>
            </div>
            <div>
               <SubmitButton text={btnText} />
            </div>
            </form>
    )
}

export default ProjectForm