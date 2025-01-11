"use client";

import Button from "@/components/Button/Button";
import { EarthCanvas } from "@/components/canvas"; // Certifique-se de que o caminho está correto
import { motion } from "framer-motion";
import styles from "./page.module.css";

const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Let's Keep in Touch</h1>
      <div className={styles.content}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className={styles.imgContainer}
        >
          <EarthCanvas />
        </motion.div>
        <form className={styles.form}>
          <input type="text" placeholder="name" className={styles.input} />
          <input type="text" placeholder="email" className={styles.input} />
          <textarea
            className={styles.textArea}
            placeholder="message"
            cols="30"
            rows="10"
          ></textarea>
          <Button url="#" text="Send"/>
        </form>
      </div>
    </div>
  );
};

export default Contact;