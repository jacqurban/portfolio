
import Menu from "./components/menu/page";
import AboutMe from "./components/about-me/page";
import Skills from "./components/skills/skills";
import Proyects from "./components/proyects/proyects";
import styles from "./page.module.css";




export default function Home() {
  return (
    <>

      <Menu />

      <div className={styles.container}>
        {/* Video de fondo desde URL externa */}
        <video autoPlay loop muted className={styles.videoBackground}>
          <source src="https://firebasestorage.googleapis.com/v0/b/webagent-imuv.appspot.com/o/Background-Santex-site.mp4?alt=media&token=70979fe0-2cc9-4e5d-a1d0-21b88e6c88b6" type="video/mp4" />
          Tu navegador no soporta el video.
        </video>
      

      <AboutMe />

      <Proyects />
     
      <Skills />


      </div>
      
    </>
  );
}
