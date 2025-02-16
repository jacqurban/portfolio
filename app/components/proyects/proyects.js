import styles from "./proyects.module.css";
import Card from "./cards/cards";
import Image from 'next/image';

const Proyects = () => {
  return (
    <>
    
    <div className={styles.seccionProyectos}> 
      <a id = "projects"></a> 
      
      <div className={styles.titulo}>Proyectos</div>

      <div className={styles.textoSuperior}>
      
      He trabajado en el desarrollo y automatización de proyectos como un sistema para un refugio de animales, un scraper para análisis de precios inmobiliarios y una herramienta de notificación para la compra de entradas a recitales      
      </div> 

      <div className={styles.contenedorCards}>
          <Card
            title="Proyecto 1"
            description="Descripción breve del proyecto."
            image="/gato.jpg"
            githubLink="https://github.com/tu-repo"
            videoLink="https://youtube.com/tu-video"
          />

          <Card
            title="Proyecto 2"
            description="Descripción breve del proyecto."
            image="/perro.jpg"
            githubLink="https://github.com/tu-repo"
            videoLink="https://youtube.com/tu-video"
          />  

          <Card
            title="Proyecto 2"
            description="Descripción breve del proyecto."
            image="/Hipopotamo.jpg"
            githubLink="https://github.com/tu-repo"
            videoLink="https://youtube.com/tu-video"
          /> 
          
        </div>
    
    </div>

  </>
  );
};

export default Proyects;