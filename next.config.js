/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuração para otimização de imagens
  images: {
    domains: ["images.pexels.com"], // Domínios permitidos para carregamento de imagens externas
    loader: "akamai", // Loader de imagem para exportação estática
    path: "", // Caminho base para imagens
    unoptimized: true, // Desativa otimização de imagens para export estático
  },
  // Configuração para exportação estática
  output: "export",
  basePath: process.env.NODE_ENV === "production" ? "/A-Casa-da-Alquimia" : "",
  assetPrefix: process.env.NODE_ENV === "production" ? "/A-Casa-da-Alquimia/" : "",
  
  // Variáveis de ambiente
  env: {
    MONGO_URI: process.env.URL_MONGO,
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    GITHUB_ID: process.env.GITHUB_ID,
    GITHUB_SECRET: process.env.GITHUB_SECRET,
  },

  // Configuração para resolver problemas relacionados à exportação estática
  trailingSlash: true, // Adiciona uma barra ao final dos caminhos
};

module.exports = nextConfig;
