var express = require('express');
var path = require('path');
var mongoose = require("mongoose")

var fs = require('fs');

mongoose.connect("mongodb+srv://admin:admin@cluster0-qyefn.mongodb.net/test?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(()=>{
    console.log("mongodb connected")
})
    .catch((err)=>{
        console.log(err)
    })

var indexRouter = require('./routes/index');
var dataRouter = require('./routes/data');
var authRouter = require('./routes/auth');

const port = process.env.PORT || 5000;

var app = express();

app.use(require("morgan")('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/data/', dataRouter);
app.use('/auth/', authRouter);

app.listen(port,()=>console.log("server started on ",port))
module.exports = app;
