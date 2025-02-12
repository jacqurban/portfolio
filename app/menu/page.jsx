import styles from "./menu.module.css";
import Image from 'next/image';

const Menu = () => {
  return <div className={styles.menu}>

      <div className={styles.seccionIzquierda}>
        
        <p className={styles.nombre}>JACQUELINE URBAN</p>
        
      </div>

      <div className={styles.seccionDerecha}>
        <a href="/#aboutMe" className={styles.a}>Sobre mi</a>
       
        <a href="/#projects" className={styles.a}>Proyectos</a>
       
        <a href="/#contact" className={styles.a}>Contacto</a>  
      </div>

    
  </div>;
};

export default Menu;
