
import Image from "next/image";
import arrowImage from "../../../public/assents/images/arrow.webp"
import styles from "./styles.module.css";
import { MdKeyboardArrowRight } from "react-icons/md";

interface DarkButtonProps {
    text: string;
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

export const DarkButton: React.FC<DarkButtonProps> = ({ text }) => {
    return (
      <div className={styles.darkBtn}>
        <span>{text}</span>
        <div className={styles.arrowContainer}>
          <div className={styles.line}></div>
          <MdKeyboardArrowRight className={styles.arrow} />
        </div>
      </div>
    );
  };

