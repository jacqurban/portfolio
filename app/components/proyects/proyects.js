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
            title="Refugio Animal"
            description="Refugio Animal es una plataforma para gestionar el registro y seguimiento de animales en adopción, incluyendo información sobre cuidadores, veterinarios y consultas."
            image="/gato.jpg"
            githubLink="https://github.com/tu-repo"
            videoLink="https://youtube.com/tu-video"
          />

          <Card
            title="Scraping Bahía"
            description="Scraping Bahía es una herramienta de recopilación de datos automatizada que extrae información relevante sobre propiedades inmobiliarias de la región de Bahía Blanca."
            image="/MiniaturaScraping.png"
            githubLink="https://github.com/jacqurban/ScrapingBahia"
            videoLink="/ScrapingBahia.mp4"
          />  

          <Card
            title="Notificación Ticket"
            description="Notificación de Tickets es un sistema que alerta a los usuarios cuando el botón para obtener un ticket está habilitado, optimizando el proceso de solicitud."
            image="/miniaturaNotificacion.png"
            githubLink="https://github.com/jacqurban/Notificacion-Ticket"
            videoLink="/BotonNotificacion.mp4"
          /> 
          
        </div>
    
    </div>

  </>
  );
};

export default Proyects;