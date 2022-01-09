const express = require('express')

const userRoute = require('./routs/userRoute')

const app = express()
const port = 3000

userRoute(app)

app.get("/", (req, res) => res.send("Ola 2222mundor"))

app.listen(port, () => console.log('API rodando na porta 3000'))