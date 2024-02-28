import Image from "next/image";
import arrowImage from "../../../public/assents/images/arrow.webp"
import styles from "./styles.module.css";
import { MdKeyboardArrowRight } from "react-icons/md";
import { BiUpArrowAlt } from "react-icons/bi";

const scrollToHeader = () => {
  const headerSection = document.getElementById("top");
  if (headerSection) {
    headerSection.scrollIntoView({ behavior: "smooth" });
  }
};

interface DarkButtonProps {
    text: string;
    onClick: () => void;
  }
  interface BtnsProps {
    title01: string;
    title02: string;
    title03: string;
    onClick: () => void;
    selectedIndex: number;
  }

export const ArrowButton =()=>{
    return(
        <div className={styles.arrowButton}>
            <Image src={arrowImage} alt="arrowImage"/>
        </div>
    )
}

export const ArrowButton2 =()=>{
    return(
        <div className={styles.arrowButton2}>
            <Image src={arrowImage} alt="arrowImage"/>
        </div>
    )
}

export const DarkButton: React.FC<DarkButtonProps> = ({ text, onClick }) => {
    return (
      <div className={styles.darkBtn} onClick={onClick}>
        <span>{text}</span>
        <div className={styles.arrowContainer}>
          <div className={styles.line}></div>
          <MdKeyboardArrowRight className={styles.arrow} />
        </div>
      </div>
    );
  };

  export const LightButton: React.FC<DarkButtonProps> = ({ text, onClick }) => {
    return (
      <div className={styles.lightBtn} onClick={onClick}>
        <span>{text}</span>
        <div className={styles.arrowLightContainer}>
          <div className={styles.lineLight}></div>
          <MdKeyboardArrowRight className={styles.arrowLight} />
        </div>
      </div>
    );
  };

  export const BackTopButton =()=>{
    return(
        <div className={styles.backTopButton} onClick={scrollToHeader}>
            <BiUpArrowAlt />
        </div>
    )
}