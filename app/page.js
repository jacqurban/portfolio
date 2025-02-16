
import Menu from "./components/menu/page.js";
import AboutMe from "./components/about-me/page.js";
import Proyects from "./components/proyects/proyects.js";
import Skills from "./components/skills/skills.js";
import styles from "./styles/page.module.css"
import "./styles/global.css"; // ✅ Se importa sin asignarlo a una variable



export default function Home() {
  return ( 
    <>
      <div className={styles.container}> 
      <video autoPlay loop muted className={styles.videoBackground}>
        <source src="https://firebasestorage.googleapis.com/v0/b/webagent-imuv.appspot.com/o/Background-Santex-site.mp4?alt=media&token=70979fe0-2cc9-4e5d-a1d0-21b88e6c88b6" type="video/mp4" />
        Tu navegador no soporta el video.
      </video>
      <Menu />
      <AboutMe />
      <Proyects />  
      <Skills />
       
      </div>
      </>
      
  );
}
