const { Sequelize } = require("sequelize")

const db = new Sequelize({
    database: "prueba",
    dialect: "postgres",
    username: "brayhandeaza",
    password: "Alicia01"
})

const authenticate = () => {
    db.authenticate().then(() => {
        db.sync()
        console.log("Connection succefully")
    }).catch((e) => {
        console.log("Connection error: " + e)
    })
}

const database = { db, authenticate }


module.exports = database