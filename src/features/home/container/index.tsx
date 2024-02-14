import {
  SectionEight,
  SectionFive,
  SectionFour,
  SectionOne,
  SectionSeven,
  SectionSix,
  SectionThree,
  SectionTwo,
} from "../views";
import styles from "./styles.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      <SectionSeven />
      <SectionEight />
    </div>
  );
};
export default Home;
