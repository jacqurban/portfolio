import styles from "./skills.module.css";
import Card from "../proyects/cards/cards";
import Image from 'next/image';

const Skills = () => {
  return <>

    <div className={styles.seccionContacto}>  
      <a id = "contact"></a> 

      <div className={styles.textoSuperior}>
      <span className={styles.titulo}>Proyectos</span>
      <p>texto boludo explicar alguna cosa</p>
        
      </div> 

      <div className={styles.contenedorCards}>
        
        </div>
    
    </div>

  </>;
};

export default Skills;