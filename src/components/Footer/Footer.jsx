import {FaGithub, FaLinkedin } from 'react-icons/fa'
import styles from './/Footer.module.css';
function Footer(){
    return (
    <footer className={styles.footer}>
    <ul className={styles.socialList}>
        <li> <a href="https://github.com/Flaviojcf" target="_blank"> <FaGithub/></a> </li>
        <li> <a href="https://www.linkedin.com/in/fl%C3%A1vio-jos%C3%A9-6055941a3/" target="_blank"> <FaLinkedin /></a>  </li>
    </ul>
    <p className={styles.copyRight}><span>Costs</span> &copy;2022</p>
    </footer>
    )
}

export default Footer