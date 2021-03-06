import { Link } from "react-router-dom"
import Container from "../layout/Container/Container"
import styles from './/Navbar.module.css'
import logo from '../../img/costs_logo.png'


function Navbar(){
return (
    <nav className={styles.navbar}>
        <Container>
       <Link to='/'><img src={logo} alt="costs" /></Link>
       
       <ul className={styles.list}>
           <li className={styles.item}>
               <Link to='/home'>Home</Link>
           </li>
           <li className={styles.item}>
               <Link to='/projects'>Projetos</Link>
           </li>  
          
       </ul>
       </Container>
    </nav>
)
}

export default Navbar