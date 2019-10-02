const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://raisantos:santosfc1@ominstack-3v0bo.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
//req.query = query params (filtros)
//req.params = route params (edicao, delecao)
//req.body = corpo da req
app.use(express.json());
app.use(routes);

app.listen(3333);