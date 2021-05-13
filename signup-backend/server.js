const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const routesUrls = require('./routes/routes')
const cors = require('cors')
const path = require('path')

dotenv.config()

const port = process.env.PORT || 5000;

const connection = async () => {
    //async function which trys to connect to mongoose and will await connection before continuing with function 
    try {
      await mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true });
      //use** stops errors
      console.log("successfully connected to MongoDB");
      //logs to console if function connects to mongoose
    } catch (error) {
      console.log(error);
      //if theres an error it will log 
    }
  };
  
  connection();

// mongoose.connect(process.env.MONGO_URL, () => console.log("Database connected"))


app.use(express.json())
app.use(cors())
app.use('/app', routesUrls)
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  });