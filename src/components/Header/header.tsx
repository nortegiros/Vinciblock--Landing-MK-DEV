import { FiMenu } from "react-icons/fi"; 
import { useTranslation } from "react-i18next";
import { BiWorld } from "react-icons/bi";
import styles from "./styles.module.css";
import { useState } from "react";
import { useRouter } from "next/router";

const Header = () => {

  // const screen = window?.innerWidth;

  const {t, i18n} = useTranslation();
  const router = useRouter();
  const [showMenw, setShowMenu] = useState(false);

  const handleChangeMenu = () => {
    setShowMenu(!showMenw);
  }

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  }
  const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLanguage = event.target.value;
    changeLanguage(selectedLanguage);
  };

  return (
    <div className={styles.container}>
      <div className={styles.headerTitle} >
        <a href="/">VINCIBLOCK</a>
      </div>

      {/* big screens */}
      <div className={styles.headerContent}>
        {/* <div className={styles.list}>
          <a href="/solutions">{t('header.solutions')}</a>
          <a href="/developers">{t('header.developers')}</a>
          <a href="/team">{t('header.team')}</a>
          <a href="/company">{t('header.company')}</a>
        </div> */}
        <div className={styles.headerButtons}>
          <div className={styles.select}>
            <BiWorld />
            <select onChange={handleLanguageChange} className={styles.select1}>
              <option value="en">{t('header.english')}</option>
              <option value="es">{t('header.spanish')}</option>
            </select>
          </div>
          <button onClick={()=>{router.push("/contact")}}>{t('header.contact')}</button>
        </div>
      </div>

      {/* small screens */}
      <div className={styles.headerContent2}>
        <div className={styles.select}>
          <BiWorld />
          <select onChange={handleLanguageChange} className={styles.select1}>
            <option value="en">{t('header.english')}</option>
            <option value="es">{t('header.spanish')}</option>
          </select>
          {/* phone screens */}
          <select onChange={handleLanguageChange} className={styles.phoneSelect}>
            <option value="en">En</option>
            <option value="es">Es</option>
          </select>
        </div>
        <button onClick={handleChangeMenu} className={styles.sandwitch}><FiMenu className={styles.icon}/></button>
        <div className={showMenw? styles.menu : styles.none}>
          {/* <a href="/solutions">{t('header.solutions')}</a>
          <a href="/developers">{t('header.developers')}</a>
          <a href="/team">{t('header.team')}</a>
          <a href="/company">{t('header.company')}</a> */}
          <a href="/contact">{t('header.contact')}</a>
        </div>
      </div>
    </div>
  );
};
export default Header;
