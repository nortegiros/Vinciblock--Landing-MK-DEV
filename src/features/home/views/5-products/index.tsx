import { useEffect, useState } from "react";
import Image from "next/image";
import products from "../../../../../public/assents/images/productos_vinciblock.gif";
import mobileApps from "../../../../../public/assents/images/mobileApp.webp";
import { DarkButton } from "@/components/Buttons/buttons";
import styles from "./styles.module.css";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";
import Link from "next/link";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export const Products: React.FC = () => {

  const router = useRouter();

  const {t}=useTranslation();

  const json = [
    {
      title: t('home.productDevelopment.title'),
      description1:t('home.productDevelopment.description01'),
      description2:t('home.productDevelopment.description02'),
      btn:t('home.productDevelopment.button'),
      image: "",
      link: 'https://www.vinciblock.com/product-development'
    },
    {
      title: t('home.products.title'),
      description1:t('home.products.description01'),
      description2:t('home.products.description02'),
      btn:t('home.products.button'),
      image: products,
      link: 'https://www.vinciblock.com/products'
    },
    {
      title: t('home.mobileApps.title'),
      description1:t('home.mobileApps.description01'),
      description2:t('home.mobileApps.description02'),
      btn:t('home.mobileApps.button'),
      image: mobileApps,
      link: 'https://www.vinciblock.com/mobile-apps'
    },
  ];
  
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
      setLoading(false)
  }, [selectedIndex]);

  const handleClick = (index: number) => {
    setLoading(true);
    setSelectedIndex(index);
  };
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setLoading(true);
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
          <Link href={json[selectedIndex].link} target="_blank" rel="noopener noreferrer">
            <DarkButton text={json[selectedIndex].btn}/>
          </Link>
        </div>
        <div
          className={json[selectedIndex].image == "" ? styles.none : selectedIndex == 0 ? styles.section2 : styles.section2b}
        >
            {loading ? (
            <div className={styles.loading}>
              <AiOutlineLoading3Quarters className={styles.spinner}/>
            </div>
          ) : (
            <Image src={json[selectedIndex].image} alt="sectionImage" />
          )}
        </div>
      </div>
    </div>
  );
};