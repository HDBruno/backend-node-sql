const { Sequelize } = require('sequelize')

const database = process.env.SQL_DATABASE;
const username = process.env.SQL_USERNAME;
const password = process.env.SQL_PASSWORD;
const host = process.env.SQL_HOST;

const sequelize = new Sequelize(
    database,
    username,
    password,
    {
        host,
        dialect: "dialecto de la db"
    }
);

const dbConnect = async () => {
    try {
        await sequelize.authenticate();
        console.log("CONEXION ESTABLECIDA")
    } catch (err) {
        console.log("ERROR DE CONEXION", err)
    }
}

module.exports = { sequelize, dbConnect };