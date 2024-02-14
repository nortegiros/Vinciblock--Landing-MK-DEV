import { useState } from "react";
import Image from "next/image";
import sectionThreeImage from "../../../../../public/assents/images/orbitas_vinci_block.gif";
import { DarkButton } from "@/components/Buttons/buttons";
import styles from "./styles.module.css";

const json = [
  {
    title: "Blockchain",
    description1:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vehicula massa in enim luctus. Rutrum arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vehicula massa in enim luctus. Rutrum arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vehicula massa in enim luctus. Rutrum arcu.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vehicula massa in enim luctus. Rutrum arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vehicula massa in enim luctus. Rutrum arcu. Lorem ipsum.",
    description2:
      "dolor sit amet, consectetur adipiscing elit. Vehicula massa in enim luctus. Rutrum arcu.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vehicula massa in enim luctus. Rutrum arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vehicula massa in enim luctus. Rutrum arcu. Lorem ipsum.",
    btn: "Iniciar Ahora",
    image: sectionThreeImage,
  },
  {
    title: "Tokenización",
    description1:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vehicula massa in enim luctus. Rutrum arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vehicula massa in enim luctus. Rutrum arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vehicula massa in enim luctus. Rutrum arcu.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vehicula massa in enim luctus. Rutrum arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vehicula massa in enim luctus. Rutrum arcu. Lorem ipsum.",
    description2:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vehicula massa in enim luctus. Rutrum arcu.",
    btn: "Iniciar Ahora",
    image: sectionThreeImage,
  },
  {
    title: "Exchange",
    description1:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vehicula massa in enim luctus. Rutrum arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vehicula massa in enim luctus. Rutrum arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vehicula massa in enim luctus. Rutrum arcu.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vehicula massa in enim luctus. Rutrum arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vehicula massa in enim luctus. Rutrum arcu. Lorem ipsum.",
    description2:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vehicula massa in enim luctus. Rutrum arcu.",
    btn: "Iniciar Ahora",
    image: sectionThreeImage,
  },
];

export const SectionThree: React.FC = () => {
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
