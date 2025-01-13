import Image from "next/image";
import Link from "next/link";
import styles from "./footer.module.css";

const Footer = () => {
  // Define o basePath para garantir que os caminhos das imagens funcionem em produção
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  return (
    <div className={styles.container}>
      <div>©2025 A Casa da Alquimia. All rights reserved.</div>
      <div className={styles.social}>
        {/* Facebook */}
        <Link href="https://www.facebook.com/casadaalquimia/?locale=pt_BR" passHref legacyBehavior>
          <a target="_blank" rel="noopener noreferrer">
            <Image
              src={`${basePath}/1.png`}
              width={24}
              height={24}
              alt="A casa da Alquimia Facebook Account"
            />
          </a>
        </Link>
        {/* Instagram */}
        <Link href="https://www.instagram.com/casadaalquimia?igsh=bXp2anV1ejQwbGUy" passHref legacyBehavior>
          <a target="_blank" rel="noopener noreferrer">
            <Image
              src={`${basePath}/2.png`}
              width={24}
              height={24}
              alt="A casa da Alquimia Instagram Account"
            />
          </a>
        </Link>
        {/* WhatsApp */}
        <Link href="https://wa.me/+5562996538902" passHref legacyBehavior>
          <a target="_blank" rel="noopener noreferrer">
            <Image
              src={`${basePath}/icons8-whatsapp-office-l/icons8-whatsapp-40.png`}
              width={24}
              height={24}
              alt="A casa da Alquimia WhatsApp Account"
            />
          </a>
        </Link>
        {/* YouTube */}
        <Link href="https://www.youtube.com/@ACasadaAlquimia" passHref legacyBehavior>
          <a target="_blank" rel="noopener noreferrer">
            <Image
              src={`${basePath}/4.png`}
              width={24}
              height={24}
              alt="A casa da Alquimia YouTube Account"
            />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
