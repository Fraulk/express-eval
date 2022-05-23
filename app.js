const mongoose = require('mongoose');
const express = require('express');
const app = express();

mongoose.connect('mongodb://localhost:27017/demojs')
    .then(() => console.log('Connected to mongo'))
    .catch((err) => console.error('Pas pu se connecter,', err))

const tacheSchema = new mongoose.Schema({
    id: Number,
    description: String,
    faite: Boolean,
});

const Tache = mongoose.model('Tache', tacheSchema);

app.get('/', (req, res) => { })

app.post('/', (req, res) => { })

app.put('/', (req, res) => { })

app.delete('/', (req, res) => { })

app.listen(3000);