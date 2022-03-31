const Sequelize = require("sequelize")
const { db, Connection } = require("./db")

const Empleado = db.define("users", {
    nombre: {
        type: Sequelize.STRING,
        allowNull: false
    },
    apellido: {
        type: Sequelize.STRING,
        allowNull: false
    },
    direccion: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cedula: {
        type: Sequelize.STRING,
        allowNull: false
    },
    dob: {
        type: Sequelize.STRING,
        allowNull: false
    },
    sueldo: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    
})

module.exports = Empleado