import styles from "./skills.module.css";
import Card from "./cards/cards";
import Image from 'next/image';

const Skills = () => {
  return (
    <div className={styles.seccionSkills}>  
      <a id="contact"></a> 

      <div className={styles.textoSuperior}>
        <span className={styles.titulo}>Proyectos</span>
        <p>texto boludo explicar alguna cosa</p>
      </div> 

      <div className={styles.contenedorCards}>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      
      </div>
    </div>
  );
};

export default Skills;