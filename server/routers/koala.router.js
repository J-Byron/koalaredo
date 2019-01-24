const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// Mongoose Schema
const Schema = mongoose.Schema;

const koalaSchema = new Schema({
  name: {type: String},
  gender: {type: String},
  age: {type: Number},
  readyToTransfer: {type: Boolean},
  notes: {type: String}
})

const Koala = mongoose.model('Koala', koalaSchema);

// Setup a GET route
router.get('/', (req, res) => {
  Koala.find({})
  .then(results => {
    console.log(results);
    res.send(results);
  })
  .catch(error => {
    console.log(`Error making GET db query ${error}`);
    res.sendStatus(500);
  })
})

// Setup a POST route
router.post('/', (req, res) => {
  const newKoala = req.body;
  console.log('req.body ', newKoala);
  Koala.create(newKoala)
    .then(results => {
      console.log(results);
      res.sendStatus(201);
    })
    .catch(error => {
      console.log(`Error making POST request ${error}`);
      res.sendStatus(500);
    })
})

// Setup a DELETE to remove a koala
router.delete('/:id', (req, res) => {
  let reqId = req.params.id;
  console.log('Delete koala id ', reqId);

  Koala.findOneAndDelete({
    _id: reqId
  })
  .then(deletedKoala => {
    console.log(deletedKoala);
    res.sendStatus(201);
  })
  .catch(error => {
    console.log(`Error deleting Koala ${error}`);
    res.sendStatus(500);
  })
});

router.put('/:id', (req, res) => {
  let updatedKoala = req.body;
  console.log('Updated koala: ', updatedKoala);
  // Find Koala
  Koala.findOneAndUpdate({
    _id: req.params.id
  }, updatedKoala)
  .then(results => {
    console.log(results);
    res.sendStatus(201);
  })
  .catch(error => {
    console.log(`Error updating koala ${error}`);
    res.sendStatus(500);
  })
})

module.exports = router;