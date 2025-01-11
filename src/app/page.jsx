"use client";

import Button from "@/components/Button/Button";
import { motion } from "framer-motion";
import Image from "next/image";
import Hero from "public/alquimia.jpeg";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
          A CASA DA ALQUIMIA RECEBE VOCÊ DE BRAÇOS ABERTOS
        </h1>
        <p className={styles.desc}>
          A Chapada dos Veadeiros é um local transformador. Pessoas de todo o mundo visitam a região em busca de uma reconexão profunda consigo mesmas. 

          As belas cachoeiras, a magia do cerrado preservado, a energia dos cristais... No contato com a natureza é possível descansar, desacelerar, recarregar as energias e, claro, entrar em contato com a própria essência.

          Também é possível ter acesso a uma grande variedade de atendimentos terapêuticos e vivências de autoconhecimento, que promovem a cura do corpo, da mente e da alma.
        </p>
        <Button url="/portfolio" text="See Our Works"/>
      </div>
      <motion.div
        whileHover={{ scale: 1.05, rotate: 2 }}
        whileTap={{ scale: 0.95 }}
        className={styles.item}
      >
        <Image src={Hero} alt="" className={styles.img} />
      </motion.div>
    </div>
  );
}