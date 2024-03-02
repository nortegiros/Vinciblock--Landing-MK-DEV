import { useEffect, useState } from "react";
import Image from "next/image";
import informaticSecurity from "../../../../../public/assents/images/seguridad_informatica.gif";
import testModules from "../../../../../public/assents/images/modulos_de_prueba.gif";
import securityAudits from "../../../../../public/assents/images/auditoria_seguridad.gif";
import { DarkButton } from "@/components/Buttons/buttons";
import styles from "./styles.module.css";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";
import Link from "next/link";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export const SectionSix: React.FC = () => {

  const router = useRouter();

  const {t}=useTranslation();

  const json = [
    {
      title: t('home.informaticSecurity.title'),
      description1:t('home.informaticSecurity.description01'),
      description2:t('home.informaticSecurity.description02'),
      btn:t('home.informaticSecurity.button'),
      image: informaticSecurity,
      link: 'https://www.vinciblock.com/informatic-security'
    },
    {
      title: t('home.testModules.title'),
      description1:t('home.testModules.description01'),
      description2:t('home.testModules.description02'),
      btn:t('home.testModules.button'),
      image: testModules,
      link: 'https://www.vinciblock.com/test-modules'
    },
    {
      title: t('home.securityAudits.title'),
      description1:t('home.securityAudits.description01'),
      description2:t('home.securityAudits.description02'),
      btn:t('home.securityAudits.button'),
      image: securityAudits,
      link: 'https://www.vinciblock.com/security-audits'
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