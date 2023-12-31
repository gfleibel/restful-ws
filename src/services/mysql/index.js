const mysqlServer = require('mysql');
require('dotenv').config()

const connection = mysqlServer.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
});

const errorHandler = (error, msg, rejectFunction) => {
  console.log(error);
  rejectFunction({ error: msg });
};

const categoryModule = require('./categories')({ connection, errorHandler });

module.exports = {
  categories: () => categoryModule,
};
