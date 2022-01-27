import theme from "./src/theme";
const CracoLessPlugin = require("craco-less");

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { ...theme },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
