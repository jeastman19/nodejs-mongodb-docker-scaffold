const config = {
  server: {
    PORT: process.env.PORT || 8088,
    ENVIROMENT: process.env.NODE_ENV || 'production',
  },
  MAIL_DISPATCHER: process.env.MAIL_DISPATCHER,
  CORS_ENABLED_WHITELIST:
        process.env.CORS_ENABLED_WHITELIST
        && process.env.CORS_ENABLED_WHITELIST.split(' '),
  VERSION: process.env.API_VERSION || 'v1',
  MONGO_URL: process.env.MONGO_URL || 'mongodb://localhost:27017/consultas_dominio',
  MONGO_DATABASE_LOCAL: process.env.MONGO_DATABASE_LOCAL,
  MONGO_DATABASE_TEST: process.env.MONGO_DATABASE_TEST,
  MONGO_DATABASE_PRODUCTION: process.env.MONGO_DATABASE_PRODUCTION,
  API_BASE_URL: process.env.BASE_URL || 'http://127.0.0.1:8088',
};

module.exports = config;
