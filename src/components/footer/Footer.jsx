import Image from "next/image";
import Link from "next/link";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>©2025 A Casa da Alquimia. All rights reserved.</div>
      <div className={styles.social}>
        <Link href="https://www.facebook.com/casadaalquimia/?locale=pt_BR" passHref legacyBehavior>
          <a target="_blank" rel="noopener noreferrer">
            <Image src="/1.png" width={24} height={24} className={styles.icon} alt="A casa da Alquimia Facebook Account" />
          </a>
        </Link>
        <Link href="https://www.instagram.com/casadaalquimia?igsh=bXp2anV1ejQwbGUy" passHref legacyBehavior>
          <a target="_blank" rel="noopener noreferrer">
            <Image src="/2.png" width={24} height={24} className={styles.icon} alt="A casa da Alquimia Instagram Account" />
          </a>
        </Link>
        <Link href="https://wa.me/+5562996538902" passHref legacyBehavior>
          <a target="_blank" rel="noopener noreferrer">
            <Image src="/icons8-whatsapp-office-l/icons8-whatsapp-40.png" width={24} height={24} className={styles.icon} alt="A casa da Alquimia WhatsApp Account" />
          </a>
        </Link>
        <Link href="https://www.youtube.com/@ACasadaAlquimia" passHref legacyBehavior>
          <a target="_blank" rel="noopener noreferrer">
            <Image src="/4.png" width={24} height={24} className={styles.icon} alt="A casa da Alquimia Youtube Account" />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Footer;