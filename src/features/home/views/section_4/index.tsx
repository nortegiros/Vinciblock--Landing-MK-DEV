import { useState } from "react";
import Image from "next/image";
import artificialIntelligence from "../../../../../public/assents/images/inteligencia_artificial.gif";
import augmentedReality from "../../../../../public/assents/images/realidad_aumentada.gif";
import facialRecognition from "../../../../../public/assents/images/reconocimiento_facial.gif";
import { DarkButton } from "@/components/Buttons/buttons";
import styles from "./styles.module.css";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";
import Link from "next/link";



export const SectionFour: React.FC = () => {

  const router = useRouter();

  const {t}=useTranslation();

  const json = [
    {
      title: t('home.artificialIntelligence.title'),
      description1:t('home.artificialIntelligence.description01'),
      description2:t('home.artificialIntelligence.description02'),
      btn:t('home.artificialIntelligence.button'),
      image: artificialIntelligence,
      link: 'https://www.vinciblock.com/artificial-intelligence'
    },
    {
      title: t('home.augmentedReality.title'),
      description1:t('home.augmentedReality.description01'),
      description2:t('home.augmentedReality.description02'),
      btn:t('home.augmentedReality.button'),
      image: augmentedReality,
      link: 'https://www.vinciblock.com/augmented-reality'
    },
    {
      title: t('home.facialRecognition.title'),
      description1:t('home.facialRecognition.description01'),
      description2:t('home.facialRecognition.description02'),
      btn:t('home.facialRecognition.button'),
      image: facialRecognition,
      link: 'https://www.vinciblock.com/facial-recognition'
    },
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
        className={styles.containerb}
      >
        <div
          className={styles.section1b}
        >
          <h2>{json[selectedIndex].title}</h2>
          <div className={styles.yellowLine}></div>
          <div>
            <p>{json[selectedIndex].description1}</p>
            <p>{json[selectedIndex].description2}</p>
          </div>
          <Link href={json[selectedIndex].link} target="_blank" rel="noopener noreferrer">
            <DarkButton text={json[selectedIndex].btn}/>
          </Link>
        </div>
        <div
          className={styles.section2b}
        >
          <Image src={json[selectedIndex].image} alt="sectionImage" />
        </div>
      </div>
    </div>
  );
};