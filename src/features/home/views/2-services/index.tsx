import { MdKeyboardArrowRight } from "react-icons/md"; 
import styles from "./styles.module.css";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";
import Link from "next/link";

interface Card {
  title: string;
  link: string;
}

export const Services: React.FC = () => {
  const router = useRouter();
  const {t}= useTranslation();
  const cards : Card[] = [
    {
      title: t('home.services.augmentedReality'),
      link:'https://www.vinciblock.com/augmented-reality'
    },
    {
      title: t('home.services.ai'),
      link:'https://www.vinciblock.com/artificial-intelligence'
    },
    {
      title: t('home.services.facialRecognition'),
      link:'https://www.vinciblock.com/facial-recognition'
    },
    {
      title: t('home.services.tokenization'),
      link:'https://www.vinciblock.com/tokenization'
    },
    {
      title: t('home.services.productDevelopment'),
      link:'https://www.vinciblock.com/products-development'
    },
    {
      title: t('home.services.informaticSecurity'),
      link:'https://www.vinciblock.com/informatic-security'
    },
    {
      title: t('home.services.exchangeDevelopment'),
      link:'https://www.vinciblock.com/exchange'
    },
    {
      title: t('home.services.mobileApp'),
      link:'https://www.vinciblock.com/mobile-apps'
    },
    {
      title: t('home.services.securityAudits'),
      link:'https://www.vinciblock.com/security-audits'
    },
    {
      title: t('home.services.blockchainDevelopment'),
      link:'https://www.vinciblock.com/blockchain'
    },
    {
      title: t('home.services.products'),
      link:'https://www.vinciblock.com/products'
    }
  ];
  const top =[0,1,2,6,7,8]
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h3>{t('home.services.title')}</h3>
      </div>
      <div className={styles.cardsContainer}>
        {cards.map((card, i) => (
          <Link key={i} className={i==11 ? styles.none :top.includes(i) ? styles.card1 : styles.card2} href={card.link} target="_blank" rel="noopener noreferrer">
            <h3>{card.title}</h3>
            <div className={i==11? styles.arrowNone : styles.arrowContainer}>
              <div className={styles.line}></div>
              <MdKeyboardArrowRight className={styles.arrow}/>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
