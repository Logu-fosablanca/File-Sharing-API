
const express = require('express')
const app = express()
const path = require('path')
//Template engine 
app.set('views',path.join(__dirname,'/views'));
app.set('view engine','ejs')
//Routes
const PORT = process.env.PORT||3000

app.use(express.static('public'));

const connectDB = require('./config/db');
connectDB();

// Routes


// download Link
// const router = require('./routes/files');

app.use('/api/files',require('./routes/files'));
// Download Page
app.use('/files',require('./routes/show'));
//files Dpownload
app.use('/files/download',require('./routes/download'));

app.listen(PORT,()=> {
    console.log(`Listening On Port ${PORT}`)
})