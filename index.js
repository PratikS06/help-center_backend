const express = require("express")
const dotenv = require("dotenv")
const cors = require("cors")
const {connectDB} = require("./db/config")

//calling route
const cardRoutes = require("./routes/card")

const app = express()

dotenv.config()

const port = process.env.PORT || 3000 

app.use(cors())
app.use(express.json())

app.use('/api',cardRoutes)


app.listen(port,()=>{
    connectDB()
    console.log(`Server is running on port ${port}`)
})