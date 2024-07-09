const express = require("express")
require ("dotenv").config()

const app = express()

const PORT = 4000 || process.env.PORT


app.get("/", (req,res) => {
    res.send("working")
})

app.listen(PORT, () => {
    console.log(`server is working on ${PORT} port`)
})