import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',  // Exportação estática
  trailingSlash: true,  // URLs terminam com "/"
  images: {
    unoptimized: true,  // Desativa otimização de imagem para funcionar com export
  },
};

export default nextConfig;
