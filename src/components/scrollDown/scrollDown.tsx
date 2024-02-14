import React from 'react';
import { IoIosArrowUp } from 'react-icons/io';
import styles from './styles.module.css';

const ScrollSection: React.FC = () => {
  return (
    <section className={styles.scroll}>
      <div >
        <div className={styles.mouse}>
          <div className={styles.rcont}>
            <div className={styles.ruedita}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScrollSection;

