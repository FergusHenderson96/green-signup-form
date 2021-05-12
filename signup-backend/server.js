const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const routesUrls = require('./routes/routes')
const cors = require('cors')

dotenv.config()

const port = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URL, () => console.log("Database connected"))

app.use(express.json())
app.use(cors())
app.use('/app', routesUrls)
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  });