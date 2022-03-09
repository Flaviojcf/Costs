import styles from './/Home.module.css'
import savings from '../../../img/saving.svg'
import LinkButton from '../../layout/LinkButton/LinkButton'

function Home() {
    return (
     <section className={styles.homeContainer}> 
    <h1>Bem vindo ao <span>Costs</span></h1>
    <p>Comece a gerencias seus projetos"</p>
    <LinkButton to='/newproject' text='Criar Projeto'/>
    <img src={savings} alt="" />
    </section>  
    )
}

export default Home