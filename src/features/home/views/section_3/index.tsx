import { use, useState } from "react";
import Image from "next/image";
import blockchain from "../../../../../public/assents/images/orbitas_vinci_block.gif";
import tokenization from "../../../../../public/assents/images/tokenizacion.gif";
import exchange from "../../../../../public/assents/images/exchange.gif";
import { DarkButton } from "@/components/Buttons/buttons";
import styles from "./styles.module.css";
import { useTranslation } from "react-i18next";

export const SectionThree: React.FC = () => {

  const {t}=useTranslation();

  const json = [
    {
      title: t('home.blockchain.title'),
      description1:t('home.blockchain.description01'),
      description2:t('home.blockchain.description02'),
      btn:t('home.blockchain.button'),
      image: blockchain,
    },
    {
      title: t('home.tokenization.title'),
      description1:t('home.tokenization.description01'),
      description2:t('home.tokenization.description02'),
      btn:t('home.tokenization.button'),
      image: tokenization,
    },
    {
      title: t('home.exchange.title'),
      description1:t('home.exchange.description01'),
      description2:t('home.exchange.description02'),
      btn:t('home.exchange.button'),
      image: exchange,
    }
  ];

  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleClick = (index: number) => {
    setSelectedIndex(index);
  };
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedIndex(parseInt(event.target.value));
  };

  return (
    <div className={styles.sectionThree}>
      <div className={styles.btnContainer}>
        {json.map((item, index) => (
          <div
            key={index}
            className={selectedIndex==index ? styles.btnSelected : styles.btn}
            onClick={() => handleClick(index)}
          >
            {item.title}
          </div>
        ))}
      </div>
      <div className={styles.btnContainer2}>
        <select className={styles.select} value={selectedIndex} onChange={handleChange}>
          {json.map((item, index) => (
            <option key={index} value={index}>
              {item.title}
            </option>
          ))}
        </select>
      </div>
      <div
        className={selectedIndex == 0 ? styles.container : styles.containerb}
      >
        <div
          className={selectedIndex == 0 ? styles.section1 : styles.section1b}
        >
          <h2>{json[selectedIndex].title}</h2>
          <div className={styles.yellowLine}></div>
          <div>
            <p>{json[selectedIndex].description1}</p>
            <p>{json[selectedIndex].description2}</p>
          </div>
          <DarkButton text={json[selectedIndex].btn} />
        </div>
        <div
          className={selectedIndex == 0 ? styles.section2 : styles.section2b}
        >
          <Image src={json[selectedIndex].image} alt="sectionImage" />
        </div>
      </div>
    </div>
  );
};
