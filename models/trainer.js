var mongoose = require('mongoose')

var trainerSchema = mongoose.Schema({
  name: String,
  region: String,
  power: Number
})

var Trainer = mongoose.model('Trainer', trainerSchema)

module.exports = Trainer
