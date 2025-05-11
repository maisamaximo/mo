import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',  // Adicionando a exportação estática
  trailingSlash: true,  // Garantir que todas as URLs terminem com uma barra "/"
};

export default nextConfig;
