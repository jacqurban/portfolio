import styles from "./proyects.module.css";
import Card from "./cards/cards";
import Image from 'next/image';

const Proyects = () => {
  return <>
    
    <div className={styles.seccionProyectos}> 
      <a id = "projects"></a> 

      <div className={styles.textoSuperior}>
      <span className={styles.titulo}>Proyectos</span>
      <p>texto explicativo</p>
        
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

  </>;
};

export default Proyects;