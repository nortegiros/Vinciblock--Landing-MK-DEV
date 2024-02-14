"use client";
import React from "react";
import styles from "./styles.module.css";

export const SectionOne: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1><span>Construyendo </span>conexiones</h1>
        <h1>hacia el Futuro Digital</h1>
      </div>
      <p>Uniendo innovación y tecnología con un enfoque sostenible, contribuyendo al progreso de la sociedad y al bienestar del planeta para un futuro digital más prometedor.</p>
      <div className={styles.search}>
        <input type="text" placeholder="Blockchain" />
        <button>Buscar</button>
      </div>
    </div>
  );
};
