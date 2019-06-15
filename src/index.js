const express = require('express')
const app = express();

const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://marianesantana:cafeexpresso@cluster0-ubtr7.mongodb.net/test?retryWrites=true&w=majority",
{
    useNewUrlParser: true
});

app.use(require('./routes'))

app.listen(3333)