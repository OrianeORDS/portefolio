/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true, // pb de config eslint, utiliser npx eslint .  pour vérifier que tout est ok avant le build 
      },
};

export default nextConfig;
