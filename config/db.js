//We Will USE Cloud Based MongoDB

require('dotenv').config();

const mongoose = require('mongoose');

function connectDB(){
    mongoose.connect(process.env.MONGO_CONNECTION_URL,{useNewUrlParser: true,
useCreateIndex:true, useUnifiedTopology: true, useFindAndModify: true});
const connection = mongoose.connection;

connection.once('open',()=>{
    console.log("DataBaseConnected")
}).catch(err=>{
    console.log("Connection Failed")
})
}

module.exports= connectDB;