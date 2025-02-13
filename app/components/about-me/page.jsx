import { FaLinkedin, FaGithub } from "react-icons/fa";
import styles from "./aboutMe.module.css";
import Image from 'next/image';

const AboutMe = () => {
  return <>

    <section className={styles.seccionAboutMe}>
      <a id= "aboutMe" ></a>
      <span className={styles.presentacion}>Hola Soy Jacqueline</span>
      <span className={styles.textPrentacion}>Técnica Universitaria en Tecnologías de Programación  Trabajo
        cómodamente en inglés, colaborando con equipos interdisciplinarios y multiculturales para garantizar productos de alta
        calidad.</span>
      <div className={styles.redesSociales}>
        <a
          href="https://www.linkedin.com/in/jacqueline-urban/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.icono}
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/jacqurban"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.icono}
        >
          <FaGithub />
        </a>
      </div>
    </section>  

    
  </>;
};

export default AboutMe;