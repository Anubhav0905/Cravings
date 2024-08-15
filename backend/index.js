const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 3000
const connectToMongo = require('./db')

app.use((req,res,next) =>{
  res.setHeader("Access-Control-Allow-Origin","http://localhost:3001");
  res.header(
    "access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
})

connectToMongo();

const User = require('./models/User');

app.use(express.json());
app.use('/api', require("./Routes/CreateUser"));
app.use('/api', require("./Routes/DisplayData"));

app.get('/', (req, res) => {
  res.send('Hello World! badhiya to hai bc');
})

app.listen(port, () => {
    console.log(`App is listening on port ${port}`)
  })