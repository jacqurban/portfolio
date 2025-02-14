import styles from "./skills.module.css";
import Card from "./cards/cards";
import Image from 'next/image';
import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaPython } from "react-icons/fa";
import { SiPandas,SiPython, SiJavascript, SiMysql, SiNextdotjs, SiFlask, SiMongodb, SiCypress, SiMicrosoft, SiPostman, SiGit, SiFigma, SiJira, SiTrello } from "react-icons/si";


const Skills = () => {
  return (
    <div className={styles.seccionSkills}>  
      <a id="contact"></a> 

      <div className={styles.textoSuperior}>
        <span className={styles.titulo}>Proyectos</span>
        <p>texto boludo explicar alguna cosa</p>
      </div> 

      <div className={styles.contenedorCards}>
        <Card 
        text="Lenguajes de Programación"
        icono1={ <FaPython /> }
        icono2={ <FaJs /> }
        
      />

      <Card 
        text="Frameworks y Librerías"
        icono1={ <FaReact /> }
        icono2={ <SiNextdotjs /> }
        icono3={ <SiPandas /> } 
      />

      <Card 
        text="Bases de Datos"
        icono1={ <SiMysql /> }
        icono2={ <SiMongodb /> }
      />

      <Card 
        text="Testing y QA"
        icono1={ <SiCypress /> }
        icono2={ <SiPostman /> }
         
      />

      <Card 
        text="Control de Versiones"
        icono1={ <SiGit /> }
      />

      <Card 
        text="Otras Herramientas"
        icono1={ <SiFigma /> }
        icono2={ <SiJira /> }
        icono3={ <SiTrello /> }
      />

      
      </div>
    </div>
  );
};

export default Skills;