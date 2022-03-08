import styles from './/Home.module.css'
import savings from '../../../img/saving.svg'
function Home() {
    return (
     <section className={styles.homeContainer}> 
    <h1>Bem vindo ao <span>Costs</span></h1>
    <p>Comece a gerencias seus projetos"</p>
    <a href="/">Criar projeto</a>
    <img src={savings} alt="" />
    </section>  
    )
}

export default Home