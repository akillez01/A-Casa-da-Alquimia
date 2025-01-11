"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa"; // Certifique-se de instalar react-icons
import styles from "./page.module.css";

const Portfolio = () => {
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.backLink}>
        <FaArrowLeft className={styles.backIcon} /> Voltar à Biblioteca
      </Link>
      <h1 className={styles.selectTitle}>Galeria</h1>
      <div className={styles.items}>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className={styles.item}
        >
          <Link href="/portfolio/illustrations" className={styles.link}>
            <span className={styles.title}>Meditação</span>
          </Link>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className={styles.item}
        >
          <Link href="/portfolio/websites" className={styles.link}>
            <span className={styles.title}>Feitios</span>
          </Link>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className={styles.item}
        >
          <Link href="/portfolio/application" className={styles.link}>
            <span className={styles.title}>Trabalhos</span>
          </Link>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className={styles.item}
        >
          <Link href="/portfolio/velamesa" className={styles.link}>
            <span className={styles.title}>Vela na Mesa</span>
          </Link>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className={styles.item}
        >
          <Link href="/portfolio/turmanatrilha" className={styles.link}>
            <span className={styles.title}>Turma na Trilha</span>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Portfolio;