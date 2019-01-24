const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// Mongoose Schema
const Scheme = mongoose.Schema;

const koalaSchema = new Schema({
  name: {type: String},
  gender: {type: String},
  age: {type: Number},
  ready_to_transfer: {type: Boolean},
  notes: {type: String}
})

const Koala = mongoose.model('Koala', koalaSchema);

// Setup a GET route
