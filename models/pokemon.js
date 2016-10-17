var mongoose = require('mongoose')

var pokemonSchema = mongoose.Schema({
  name: String,
  kind: String,
  power: Number,
  trainer_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Trainer'
  }
})

var Pokemon = mongoose.model('Pokemon', pokemonSchema)

module.exports = Pokemon
