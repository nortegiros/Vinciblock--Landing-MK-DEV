import { FiMenu } from "react-icons/fi";
import { useTranslation } from "react-i18next";
import { BiWorld } from "react-icons/bi";
import styles from "./styles.module.css";
import { useEffect, useState } from "react";
import Image from "next/image";
import background from "../../../public/assents/images/backgroundFirstPage1.webp";

const Header = () => {
  const { t, i18n } = useTranslation();
  const [showMenu, setShowMenu] = useState(false);
  const [backgroundOpacity, setBackgroundOpacity] = useState(0); // Estado para controlar la opacidad del fondo

  useEffect(() => {
    const handleScroll = () => {
      // Obtener la posición actual del scroll
      const scrollPosition = window.scrollY;

      // Calcular la nueva opacidad basada en la posición del scroll
      const newOpacity = scrollPosition > 0 ? 1 : 0;

      // Actualizar el estado de la opacidad del fondo
      setBackgroundOpacity(newOpacity);
    };

    // Agregar el evento de scroll al montar el componente
    window.addEventListener("scroll", handleScroll);

    // Limpiar el evento de scroll al desmontar el componente
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    localStorage.setItem("language", event.target.value);
    i18n.changeLanguage(event.target.value);
  };

  const scrollToContacts = () => {
    const contactsSection = document.getElementById("contact");
    if (contactsSection) {
      contactsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleChangeMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className={styles.container} style={{ backgroundColor: `rgba(1, 1, 1, ${backgroundOpacity})` }}>
      <div className={styles.headerTitle}>
        <a href="/">VINCIBLOCK</a>
      </div>
      <div className={styles.headerContent}>
        <div className={styles.headerButtons}>
          <div className={styles.select}>
            <BiWorld />
            <select value={i18n.language} onChange={handleLanguageChange} className={styles.select1}>
              <option value="en">{t('header.english')}</option>
              <option value="es">{t('header.spanish')}</option>
            </select>
          </div>
          <button onClick={scrollToContacts}>{t('header.contact')}</button>
        </div>
      </div>
      <div className={styles.headerContent2}>
        <div className={styles.select}>
          <BiWorld className={styles.world} />
          <select value={i18n.language} onChange={handleLanguageChange} className={styles.select1}>
            <option value="en">{t('header.english')}</option>
            <option value="es">{t('header.spanish')}</option>
          </select>
          <select value={i18n.language} onChange={handleLanguageChange} className={styles.phoneSelect}>
            <option value="en">En</option>
            <option value="es">Es</option>
          </select>
        </div>
        <button onClick={handleChangeMenu} className={styles.sandwitch}><FiMenu className={styles.icon} /></button>
        <div className={showMenu ? styles.menu : styles.none}>
          <div onClick={scrollToContacts}>{t("header.contact")}</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
