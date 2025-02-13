import Image from 'next/image';
import { FaGithub, FaVideo } from "react-icons/fa";
import styles from "./cards.module.css";

const Card = ({ title, description, image, githubLink, videoLink }) => {
  return (
    <div className={styles.card}>

      <Image src={image} alt={title} width={300} height={200} />
      <h3>{title}</h3>
      <p>{description}</p>
      <div className={styles.iconos}>
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          <FaGithub className={styles.icono} />
        </a>
        
        <a href={videoLink} target="_blank" rel="noopener noreferrer">
          <FaVideo className={styles.icono} />
        </a>

      </div>
    </div>
  );
};

export default Card;
