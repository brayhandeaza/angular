const express = require("express")
const app = express()
const { db, authenticate } = require("./db")
const Empleado = require("./model")
const cors = require("cors")
const bodyParser = require("body-parser")


app.use(cors())
app.use(bodyParser.json())
authenticate(db)

app.get("/users", async (req, res) => {
    await Empleado.findAll().then((Empleado) => {
        res.json({
            status: 200,
            Empleado
        })
    }).catch((err) => {
        res.send(err)
    })
})

app.post("/users", async (req, res) => {
    await Empleado.create(req.body).then((Empleado) => {
        res.json({
            status: 200,
            Empleado
        })
    }).catch((err) => {
        res.send(err)
    })
})
app.patch("/users/:id", async (req, res) => {

    await Empleado.findByPk(req.params.id).then(empleado => {
        empleado.update(req.body).then((Empleado) => {
            res.json({
                status: 200,
                Empleado
            })
        }).catch((err) => {
            res.send(err)
        })
    }).catch((err) => {
        res.send(err)
    })
})

app.delete("/users/:id", async (req, res) => {
    await Empleado.findOne({ where: { id: req.params.id } }).then((table) => {
        if (table) {
            table.destroy().then(() => {
                res.json({
                    status: 200,
                    message: "row deleted succefully"
                })
            }).catch((err) => {
                res.send(err)
            })
        } else {
            res.json({
                status: 400,
                message: "This row does not exist in this table"
            })
        }
    }).catch((err) => {
        res.send(err)
    })
})





app.listen(3000)