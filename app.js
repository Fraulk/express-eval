const mongoose = require('mongoose');
const express = require('express');
const app = express();
app.use(express.json())

mongoose.connect('mongodb://localhost:27017/demojs')

const tacheSchema = new mongoose.Schema({
    id: Number,
    description: String,
    faite: Boolean,
});

const Tache = mongoose.model('Tache', tacheSchema);
// const task = new Tache({id: 2, description: "TEST", faite: false})
// task.save()

app.get('/tache/:id', async (req, res) => res.send(await Tache.find({id: req.params.id})))

app.get('/tache', async (req, res) => res.send(await Tache.find()))

app.post('/tache', async (req, res) => {
    const tache = new Tache(req.body)
    let result
    try {
        result = await tache.save()
    } catch (error) {console.log(error)}
    res.send(result)
})

app.put('/tache/:id', async (req, res) => {
    const tache = { $set: req.body }
    let result
    try {
        result = await Tache.updateOne({id: req.params.id}, tache)
    } catch (error) {console.log(error)}
    res.send()
})

app.delete('/tache/:id', async (req, res) => res.send(await Tache.deleteOne({id: req.params.id})))

if (process.env.NODE_ENV !== "test") {
    app.listen(3000, () => {
      console.log("listening...");
    });
  }

module.exports = {app, Tache}