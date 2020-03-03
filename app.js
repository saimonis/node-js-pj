var express = require('express');
// var path = require('path');
// var logger = require('morgan');

var indexRouter = require('./routes/index');
var dataRouter = require('./routes/data');

var app = express();

// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/data/', dataRouter);

app.listen(5000,()=>console.log("server started"))
module.exports = app;
