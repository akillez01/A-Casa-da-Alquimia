"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Button from "../components/Button/Button";
import styles from "./page.module.css";
import Hero from "/public/alquimia.jpeg";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
          A CASA DA ALQUIMIA RECEBE VOCÊ DE BRAÇOS ABERTOS
        </h1>
        <p className={styles.desc}>
          A Chapada dos Veadeiros é um local transformador. Pessoas de todo o mundo visitam a região em busca de uma reconexão profunda consigo mesmas. 
          {/* Conteúdo removido por brevidade */}
        </p>
        <Button url="/portfolio" text="See Our Works" />
      </div>
      <motion.div
        whileHover={{ scale: 1.05, rotate: 2 }}
        whileTap={{ scale: 0.95 }}
        className={styles.item}
      >
        <Image 
          src={Hero} 
          alt="Imagem representativa da Casa da Alquimia, com elementos naturais e energia do cerrado" 
          className={styles.img} 
          priority // Melhorar a carga da imagem
        />
      </motion.div>
    </div>
  );
}
