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
        <Link href="https://www.facebook.com/casadaalquimia/?locale=pt_BR">
          <Image
            src="../../1.png"
            width={24}
            height={24}
            alt="A Casa da Alquimia Facebook"
          />
        </Link>
        {/* Instagram */}
        <Link href="https://www.instagram.com/casadaalquimia?igsh=bXp2anV1ejQwbGUy">
          <Image
            src="../../2.png"
            width={24}
            height={24}
            alt="A Casa da Alquimia Instagram"
          />
        </Link>
        {/* WhatsApp */}
        <Link href="https://wa.me/+5562996538902">
          <Image
            src="../../whatsapp2.png"
            width={24}
            height={24}
            alt="A Casa da Alquimia WhatsApp"
          />
        </Link>
        {/* YouTube */}
        <Link href="https://www.youtube.com/@ACasadaAlquimia">
          <Image
            src="../../4.png"
            width={24}
            height={24}
            alt="A Casa da Alquimia YouTube"
          />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
