const express = require("express")
require ("dotenv").config()
const connectDB = require("./config/db")

const app = express()
connectDB()
const PORT = 4000 || process.env.PORT
const apiRouter =require("./routes")
const cookieParser = require("cookie-parser")
const cors = require("cors")

app.use(cors())
app.use(cookieParser())
app.use(express.json())
app.use("/api",apiRouter)


app.listen(PORT, () => {
    console.log(`server is working on ${PORT} port`)
})