const withPWA = require("next-pwa");
const optimizedImages = require('next-optimized-images');

module.exports = optimizedImages();

module.exports = withPWA({
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
  }
})