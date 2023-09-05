const mysqlServer = require('mysql');

const connection = mysqlServer.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Avamys!01',
  database: 'restful_ws',
});

const errorHandler = (error, msg, rejectFunction) => {
  console.log(error);
  rejectFunction({ error: msg })
}

const categoryModule = require('./categories')({ connection, errorHandler });

module.exports = {
  categories: () => categoryModule
};
