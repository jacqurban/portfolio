import styles from "./cards.module.css";
import { FaReact, FaJs, FaHtml5, FaCss3Alt } from "react-icons/fa";

const Card = () => {
  return (
    <div className={styles.card}>
      <div className={styles.cardInner}>
        <div className={styles.cardFront}>Desarrollo Web</div>
        <div className={styles.cardBack}>
          <FaReact size={40} />
          <FaJs size={40} />
          <FaHtml5 size={40} />
          <FaCss3Alt size={40} />
        </div>
      </div>
    </div>
  );
};

export default Card;


