
const express = require('express')
const app = express()
const path = require('path')
const cors= require('cors')

const corsOptions = {
  origin: process.env.ALLOWED_CLIENTS.split(',')
  // ['http://localhost:3000', 'http://localhost:5000', 'http://localhost:3300']
}

// Default configuration looks like
// {
//     "origin": "*",
//     "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
//     "preflightContinue": false,
//     "optionsSuccessStatus": 204
//   }

app.use(cors(corsOptions))
//Template engine 
app.set('views',path.join(__dirname,'/views'));
app.set('view engine','ejs')
//Routes
const PORT = process.env.PORT||3000;


app.use(express.static('public'));
app.use(express.json());


const connectDB = require('./config/db');
connectDB();


// const router = require('./routes/files');

app.use('/api/files',require('./routes/files'));
// Download Page
app.use('/files/',require('./routes/show'));
//files Dpownload
app.use('/files/download/',require('./routes/download'));



app.listen(PORT,()=> {
    console.log(`Listening On Port ${PORT}`)
});
