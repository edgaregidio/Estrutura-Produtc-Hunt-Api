const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

// Iniciando o APP
const app = express();
app.use(express.json());
app.use(cors());

// Iniciando o Banco de Dados
mongoose.connect('mongodb+srv://edgarjs:excel2018ngn123@cluster0-gx5ly.mongodb.net/test?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
requireDir('./src/models');


// ROTAS
app.use('/api', require('./src/routes'));

app.listen(3001);