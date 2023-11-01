const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');
const path = require('path');

module.exports = envVars => {
  console.log(envVars);
  const { env } = envVars;
  const envConfig = require(`./webpack.${env}.js`);
  const config = merge(commonConfig, envConfig);
  //Adding support for .env files
  //const filePath = path.resolve(__dirname, '..', `./.env.${env}`);
  // config.plugins = [
  //   ...config.plugins
  // ];
  return config;
};
