const merge = require('lodash/merge');
const env = process.env.NODE_ENV || 'development';

const baseConfig = {
  env,
}

let envConfig = {};

switch (env) {
  case 'dev':
  case 'development':
  default: {
    envConfig = require('./dev')
  }
}

module.exports = merge(baseConfig, envConfig);
