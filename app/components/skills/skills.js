import styles from "./skills.module.css";
import Card from "./cards/cards.js";
import Image from 'next/image';
import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaPython } from "react-icons/fa";
import { SiPandas,SiPython, SiJavascript, SiMysql, SiNextdotjs, SiFlask, SiMongodb, SiCypress, SiMicrosoft, SiPostman, SiGit, SiFigma, SiJira, SiTrello } from "react-icons/si";


const Skills = () => {
  return (
    <div className={styles.seccionSkills}>  
      <a id="contact"></a> 
      <div className={styles.titulo}>Skills</div>
      <div className={styles.textoSuperior}>
        
        A medida que avanzo en mi carrera como desarrolladora, he adquirido experiencia en diversas tecnologías que me permiten enfrentar proyectos desafiantes. Estas son algunas de las herramientas y lenguajes con los que estoy trabajando actualmente:
      </div> 

      <div className={styles.contenedorCards}>

      
        <Card 
          text="Lenguajes de Programación"
          icono1={
            <span className={styles.tooltip}>
              <FaPython />
              <span className={styles.tooltipText}>Python</span>
            </span>
          }
          icono2={
            <span className={styles.tooltip}>
              <FaJs />
              <span className={styles.tooltipText}>JavaScript</span>
            </span>
          }
        />

        <Card 
          text="Frameworks y Librerías"
          icono1={
            <span className={styles.tooltip}>
              <FaReact />
              <span className={styles.tooltipText}>React</span>
            </span>
          }
          icono2={
            <span className={styles.tooltip}>
              <SiNextdotjs />
              <span className={styles.tooltipText}>Next.js</span>
            </span>
          }
          icono3={
            <span className={styles.tooltip}>
              <SiPandas />
              <span className={styles.tooltipText}>Pandas</span>
            </span>
          }
        />

        <Card 
          text="Bases de Datos"
          icono1={
            <span className={styles.tooltip}>
              <SiMysql />
              <span className={styles.tooltipText}>MySQL</span>
            </span>
          }
          icono2={
            <span className={styles.tooltip}>
              <SiMongodb />
              <span className={styles.tooltipText}>MongoDB</span>
            </span>
          }
        />

        <Card 
          text="Testing y QA"
          icono1={
            <span className={styles.tooltip}>
              <SiCypress />
              <span className={styles.tooltipText}>Cypress</span>
            </span>
          }
          icono2={
            <span className={styles.tooltip}>
              <SiPostman />
              <span className={styles.tooltipText}>Postman</span>
            </span>
          }
        />

        <Card 
          text="Control de Versiones"
          icono1={
            <span className={styles.tooltip}>
              <SiGit />
              <span className={styles.tooltipText}>Git</span>
            </span>
          }
        />

        <Card 
          text="Otras Herramientas"
          icono1={
            <span className={styles.tooltip}>
              <SiFigma />
              <span className={styles.tooltipText}>Figma</span>
            </span>
          }
          icono2={
            <span className={styles.tooltip}>
              <SiJira />
              <span className={styles.tooltipText}>Jira</span>
            </span>
          }         
        />
      </div>
    </div>
  );
};

export default Skills;