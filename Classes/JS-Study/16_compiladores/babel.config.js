// Garante que os navegadores antigos suportem as novas versões
const presets = [
  [
    "@babel/preset-env",
    {
      target: {
        edge: "17",
        firefox: "60",
        chrome: "67",
        safari: "11.1",
      },
    },
  ],
];

// Exportar as configurações
module.exports = { presets };
