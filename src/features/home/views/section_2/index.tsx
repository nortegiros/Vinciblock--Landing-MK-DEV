import { MdKeyboardArrowRight } from "react-icons/md"; 
import styles from "./styles.module.css";

export const SectionTwo: React.FC = () => {
  const cards: string[] = [
    'Smart Contract',
    'Inteligencia Artificial',
    'Reconocimiento Facial',
    'Tokenización',
    'Desarrollo de productos',
    'Seguridad informática',
    'Desarrollo de exchange',
    'Aplicaciones móviles',
    'Auditorías de seguridad',
    'Desarrollo de blockchain',
    'Pasarelas de pagos',
    ""
  ];
  const top =[0,1,2,6,7,8]
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h3>Servicios</h3>
      </div>
      <div className={styles.cardsContainer}>
        {cards.map((card, i) => (
          <div key={i} className={i==11 ? styles.none :top.includes(i) ? styles.card1 : styles.card2}>
            <h3>{card}</h3>
            <div className={i==11? styles.arrowNone : styles.arrowContainer}>
              <div className={styles.line}></div>
              <MdKeyboardArrowRight className={styles.arrow}/>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
