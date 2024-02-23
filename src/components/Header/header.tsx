'use client'
import { FiMenu } from "react-icons/fi"; 
import { useTranslation } from "react-i18next";
import { BiWorld } from "react-icons/bi";
import styles from "./styles.module.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import background from "../../../public/assents/images/backgroundFirstPage1.webp";

const Header = () => {

  const {t, i18n} = useTranslation();
  const [showMenw, setShowMenu] = useState(false);
  
  let language = "en";
  useEffect(() => {
    if(localStorage.getItem("language")){
      language =  localStorage.getItem("language") || "en";
      setSelectedLanguage(language);
      i18n.changeLanguage(language);
    }
  }, []);
  const [selectedLanguage, setSelectedLanguage] = useState(language);  
  const handleChangeMenu = () => {
    setShowMenu(!showMenw);
  }
  const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    localStorage.setItem("language", event.target.value);
    setSelectedLanguage(event.target.value);
    i18n.changeLanguage(event.target.value);
  };

  const scrollToContacts = () => {
    const contactsSection = document.getElementById("contact");
    if (contactsSection) {
      contactsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={styles.container} id="header">
      <Image src={background} alt="background" className={styles.background}/>
      <div className={styles.headerTitle} >
        <a href="/">VINCIBLOCK</a>
      </div>

      {/* big screens */}
      <div className={styles.headerContent}>
        <div className={styles.headerButtons}>
          <div className={styles.select}>
            <BiWorld />
            <select value={selectedLanguage} onChange={handleLanguageChange} className={styles.select1}>
              <option value="en">{t('header.english')}</option>
              <option value="es">{t('header.spanish')}</option>
            </select>
          </div>
          <button onClick={scrollToContacts}>{t('header.contact')}</button>
        </div>
      </div>

      {/* small screens */}
      <div className={styles.headerContent2}>
        <div className={styles.select}>
          <BiWorld className={styles.world}/>
          <select value={selectedLanguage} onChange={handleLanguageChange} className={styles.select1}>
            <option value="en">{t('header.english')}</option>
            <option value="es">{t('header.spanish')}</option>
          </select>
          {/* phone screens */}
          <select value={selectedLanguage} onChange={handleLanguageChange} className={styles.phoneSelect}>
            <option value="en">En</option>
            <option value="es">Es</option>
          </select>
        </div>
        <button onClick={handleChangeMenu} className={styles.sandwitch}><FiMenu className={styles.icon}/></button>
        <div className={showMenw? styles.menu : styles.none}>
          <div onClick={scrollToContacts}>{t("header.contact")}</div>
        </div>
      </div>
    </div>
  );
};
export default Header;
