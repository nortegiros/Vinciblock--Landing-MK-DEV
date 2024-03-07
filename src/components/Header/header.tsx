import { IoIosArrowUp } from "react-icons/io"; 
import { IoIosArrowDown } from "react-icons/io";
import { FiMenu } from "react-icons/fi";
import { useTranslation } from "react-i18next";
import { BiWorld } from "react-icons/bi";
import styles from "./styles.module.css";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import logo from '../../../public/assents/images/light-logo-VinciBlock.png';

const Header = () => {
  const { t, i18n } = useTranslation();
  const [showMenu, setShowMenu] = useState(false);
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);

  const router = useRouter();

  let pathname = "";

  useEffect(() => {
    pathname = window.location.pathname;
  });

  let language = "es";
  useEffect(() => {
    if (localStorage.getItem("language")) {
      language = localStorage.getItem("language") || "es";
      setSelectedLanguage(language);
      i18n.changeLanguage(language);
    }
  }, []);
  const [selectedLanguage, setSelectedLanguage] = useState(language);
  const [selectedNameLanguage, setSelectedNameLanguage] = useState(
    t("header.spanish")
  );
  const [selectedNameLanguage2, setSelectedNameLanguage2] = useState(
    "Es"
  );
  const handleChangeMenu = () => {
    setShowMenu(!showMenu);
  };
  const handleChangeLanguageMenu = () => {
    setShowLanguageMenu(!showLanguageMenu);
  };
  const handleLanguageChange = (actualLangiage: string) => {
    localStorage.setItem("language", actualLangiage);
    setSelectedLanguage(actualLangiage);
    i18n.changeLanguage(actualLangiage);
    setShowLanguageMenu(!showLanguageMenu);
    if (actualLangiage === "es") {
      setSelectedNameLanguage(t("header.spanish"));
      setSelectedNameLanguage2("Es");
    } else {
      setSelectedNameLanguage(t("header.english"));
      setSelectedNameLanguage2("En");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.headerTitle}>
        <Link href="/">
          <Image src={logo} alt="VinciBlockLogo"/>
        </Link>
      </div>

      {/* big screens */}
      <div className={styles.headerContent}>
        <div className={styles.headerButtons}>
          <div className={styles.selectContainer} onClick={handleChangeLanguageMenu}>
            <BiWorld />
            <div className={styles.select1}>
              {selectedNameLanguage}
            </div>
            {showLanguageMenu? <IoIosArrowUp /> : <IoIosArrowDown />}
            <div
              className={showLanguageMenu ? styles.languageMenu : styles.none}
            >
              <div
                onClick={() => handleLanguageChange("en")}
                className={styles.languageOptions}
              >
                {t("header.english")}
              </div>
              <div
                onClick={() => handleLanguageChange("es")}
                className={styles.languageOptions}
              >
                {t("header.spanish")}
              </div>
            </div>
          </div>
          <button onClick={() => router.push(`${pathname}/#contact`)}>
            {t("header.contact")}
          </button>
        </div>
      </div>
      {/* small screens */}
      <div className={styles.headerContent2}>
        <div className={styles.selectContainer}  onClick={handleChangeLanguageMenu}>
          <BiWorld />
          <div className={styles.select1}>
            {selectedNameLanguage}
          </div>
          {showLanguageMenu? <IoIosArrowUp /> : <IoIosArrowDown />}
          <div
            className={showLanguageMenu ? styles.languageMenu : styles.none}
          >
            <div
              onClick={() => handleLanguageChange("en")}
              className={styles.languageOptions}
            >
              {t("header.english")}
            </div>
            <div
              onClick={() => handleLanguageChange("es")}
              className={styles.languageOptions}
            >
              {t("header.spanish")}
            </div>
          </div>
        </div>
        {/* phone screens */}
        <div className={styles.selectContainer2} onClick={handleChangeLanguageMenu}>
          <BiWorld />
          <div className={styles.select1}>
            {selectedNameLanguage2}
          </div>
          {showLanguageMenu? <IoIosArrowUp /> : <IoIosArrowDown />}
          <div
            className={showLanguageMenu ? styles.languageMenu : styles.none}
          >
            <div
              onClick={() => handleLanguageChange("en")}
              className={styles.languageOptions}
            >
            En
            </div>
            <div
              onClick={() => handleLanguageChange("es")}
              className={styles.languageOptions}
            >
              Es
            </div>
          </div>
        </div>
        <button onClick={handleChangeMenu} className={styles.sandwitch}>
          <FiMenu className={styles.icon} />
        </button>
        <div className={showMenu ? styles.menu : styles.none}>
          <div onClick={() => router.push(`${pathname}/#contact`)}>
            {t("header.contact")}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
