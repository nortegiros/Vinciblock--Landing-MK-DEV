import { MdKeyboardArrowRight } from "react-icons/md"; 
import styles from "./styles.module.css";
import { useTranslation } from "react-i18next";

export const SectionTwo: React.FC = () => {
  const {t}= useTranslation();
  const cards: string[] = [
    t('home.services.smartContract'),
    t('home.services.ai'),
    t('home.services.facialRecognition'),
    t('home.services.tokenization'),
    t('home.services.productDevelopment'),
    t('home.services.informaticSecurity'),
    t('home.services.exchangeDevelopment'),
    t('home.services.mobileApp'),
    t('home.services.securityAudits'),
    t('home.services.blockchainDevelopment'),
    t('home.services.paymentGateways'),
    ""
  ];
  const top =[0,1,2,6,7,8]
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h3>{t('home.services.title')}</h3>
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
