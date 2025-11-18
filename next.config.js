/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost'],
  },
  // Configuración para manejar módulos de Node.js
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // No resolver módulos de Node.js en el cliente
      config.resolve.fallback = {
        fs: false,
        path: false,
      }
    }
    return config
  },
}

module.exports = nextConfig
