import styles from "./cards.module.css";



const Card = (props) => {
  const text = props.text;
  const icono1 = props.icono1
  const icono2 = props.icono2
  const icono3 = props.icono3
  
  return (
    <div className={styles.card}>
      <div className={styles.cardInner}>
        <div className={styles.cardFront}>{text}</div>
        <div className={styles.cardBack}>
          {icono1}
          {icono2}
          {icono3}
        </div>
      </div>
    </div>
  );
};

export default Card;


