import {
  ArtificialInteligence,
  Blockchain,
  Contact,
  Hero, NewProject, Products, Security, Services,
} from "../views";
import styles from "./styles.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <Hero />
      <Services />
      <Blockchain />
      <ArtificialInteligence />
      <Products />
      <Security />
      <NewProject />
      <Contact />
    </div>
  );
};
export default Home;
