import React from "react";
import styles from "./styles.module.css";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import figures from "../../../../../public/assents/images/backgroundFirstPage2.webp";
import backgroundLight from "../../../../../public/assents/images/backgroundFirstPage1.webp";
import light from "../../../../../public/assents/images/light01.webp";

export const SectionOne: React.FC = () => {
  const {t}= useTranslation();
  return (
    <div className={styles.container}>
      <Image src={figures} alt="background1" className={styles.background1}/>
      <Image src={light} alt="light1" className={styles.light1}/>
      <Image src={light} alt="light2" className={styles.light2}/>
      <Image src={light} alt="light3" className={styles.light3}/>
      <Image src={light} alt="light4" className={styles.light4}/>
      <div className={styles.title}>
        <h1><span>{t('home.frontPage.title.first')} </span>{t('home.frontPage.title.second')}</h1>
        <h1>{t('home.frontPage.title.third')}</h1>
      </div>
      <p>{t('home.frontPage.description')}</p>
      <div className={styles.search}>
        <input type="text" placeholder={t('home.frontPage.placeHolder')} />
        <button>{t('home.frontPage.search')}</button>
      </div>
    </div>
  );
};
