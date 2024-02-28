import React, { useState } from "react";
import styles from "./styles.module.css";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import figures from "../../../../../public/assents/images/backgroundFirstPage2.webp";
import light from "../../../../../public/assents/images/light01.webp";

export const SectionOne: React.FC = () => {
  const {t}= useTranslation();
  const [searchTerm, setSearchTerm] = useState<string>("");

  // Función para manejar los cambios en la entrada del usuario
  const handleSearchInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleClick = () => {
    let found = false;
    const elementsToSearch = document.querySelectorAll("p, h2, option, img");
    elementsToSearch.forEach(element => {
      if (element instanceof HTMLParagraphElement || element instanceof HTMLHeadingElement || element instanceof HTMLOptionElement) {
        if (element.textContent?.toLowerCase().includes(searchTerm.toLowerCase())) {
          console.log("Found in:", element);
          found = true;
          // Dirigirte hacia el contenedor principal del elemento
          element.parentElement?.scrollIntoView({ behavior: "smooth", block: "start" });
          return; // Detener el bucle una vez que se encuentre la primera coincidencia
        }
      } else if (element instanceof HTMLImageElement) {
        if (element.alt.toLowerCase().includes(searchTerm.toLowerCase())) {
          console.log("Found in image alt:", element.alt);
          found = true;
          // Dirigirte hacia el contenedor principal del elemento
          element.parentElement?.scrollIntoView({ behavior: "smooth", block: "start" });
          return; // Detener el bucle una vez que se encuentre la primera coincidencia
        }
      }
    });
  
    if (!found) {
      console.log("No matches found");
    }
  };  

  return (
    <div className={styles.container} id="top">
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
        <input type="text" placeholder={t('home.frontPage.placeHolder')} value={searchTerm} onChange={handleSearchInput}/>
        <button onClick={handleClick}>{t('home.frontPage.search')}</button>
      </div>
    </div>
  );
};
