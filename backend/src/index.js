const express = require('express')
const path = require('path')
const app = express();
const cors = require('cors')

const server = require('http').Server(app)
const io = require('socket.io')(server)

const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://marianesantana:cafeexpresso@cluster0-ubtr7.mongodb.net/test?retryWrites=true&w=majority",
{
    useNewUrlParser: true
});

app.use((req, res, next) => {
    req.io = io; 

    next()
})

app.use(cors())

app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads', 'resized')));
app.use(require('./routes'))

app.listen(3333)