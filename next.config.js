/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@po/common-components"],
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "polink-static-contents.polarisoffice.com" },
      { protocol: "https", hostname: "install.polarisoffice.com" },
      { protocol: "https", hostname: "vf-ca-install.polarisoffice.com" }
    ]
  }
};

module.exports = nextConfig;
