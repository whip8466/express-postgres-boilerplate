require('dotenv').config();

module.exports = {
  development: {
    // url: process.env.DATABASE_URL,
    database: process.env.DATABASE_NAME,
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASWORD,
    dialect: 'postgres',
    ogging: console.log,
    logging: function (str) {
      if(process.env.DATABASE_QUERY_LOGGING === 'true') {
        console.log('>>>>>> str: ', {str});
      }
    }
  },
  test: {
    url: process.env.TEST_DATABASE_URL,
    database: process.env.DATABASE_NAME,
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASWORD,
    dialect: 'postgres',
  },
  production: {
    // url: process.env.DATABASE_URL,
    database: process.env.DATABASE_NAME,
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASWORD,
    dialect: 'postgres',
  },
};