import { FaLinkedin, FaGithub, FaEnvelope , FaWhatsapp } from "react-icons/fa";
import styles from "./aboutMe.module.css";


const AboutMe = () => {
  return (
    <>
      <section className={styles.seccionAboutMe}>
        <a id="aboutMe"></a>
        
        <div className={styles.presentacion}>Hola Soy Jacqueline</div>
        
        <div className={styles.textPresentacion}>
        Soy Técnica Universitaria en Tecnologías de Programación. Comencé mi camino en el mundo del testing, lo que me enseñó la importancia de los pequeños detalles y el trabajo en equipo. Me apasiona seguir aprendiendo y creciendo como desarrolladora. Mi objetivo es seguir explorando nuevas tecnologías y crear soluciones que realmente ayuden a las personas        
        </div>

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

          <a
            href="mailto:jacquelineurban.ar@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.icono}
          >
            <FaEnvelope />
            
          </a>
          <a
            href="https://wa.me/5492915277655"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.icono}
          >
            <FaWhatsapp />
          </a>
        </div>
      </section>
    </>
  );
};

export default AboutMe;
