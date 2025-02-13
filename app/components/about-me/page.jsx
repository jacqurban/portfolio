import styles from "./aboutMe.module.css";
import Image from 'next/image';

const AboutMe = () => {
  return <div className={styles.aboutMe}>

    <section className={styles.seccionAboutMe}>
      <a id= "aboutMe" ></a>
      <span className={styles.presentacion}>Hola Soy Jacqueline</span>
      <span className={styles.textPrentacion}>Técnica Universitaria en Tecnologías de Programación y QA Analyst con más de 4 años de experiencia en aseguramiento de
        la calidad. Manejo herramientas como Jira y Postman, además de automatizaciones con Cypress y Playwright. Trabajo
        cómodamente en inglés, colaborando con equipos interdisciplinarios y multiculturales para garantizar productos de alta
        calidad.</span>
    </section>  

    
  </div>;
};

export default AboutMe;