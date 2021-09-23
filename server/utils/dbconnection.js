const { Sequelize } = require('sequelize');

const connect = new Sequelize('ppaf', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false
});


connect.authenticate()
.then(()=> console.log("connected has made"))
.catch((err)=>console.log("Ther is an error connecting db",err));


module.exports = connect;