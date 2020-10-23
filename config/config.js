require('dotenv').config();
module.exports ={
  "development": {
    "username": "butibuti",
    "password": "0714buti",
    "database": "maguroroad",
    "host": "127.0.0.1",
    "dialect": "postgres",
    "operatorsAliases": false
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": process.env.MAGURO_USER,
    "database": process.env.MAGURO_DATABASE,
    "password": process.env.MAGURO_PASSWORD,
    "host": process.env.MAGURO_HOST,
    "dialect": "postgres",
    "port":process.env.MAGURO_PORT,
    "url": process.env.MAGURO_URI
  }
  
}
