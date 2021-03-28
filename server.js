
const express = require('express')
const app = express()

const PORT = process.env.PORT||3000


const connectDB = require('./config/db');
connectDB();

// Routes
const router = require('./routes/files');

app.use('/api/files',require('./routes/files'));

app.listen(PORT,()=> {
    console.log(`Listening On Port ${PORT}`)
})