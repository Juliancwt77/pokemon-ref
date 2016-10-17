var Pokemon = require('../models/pokemon')
var Trainer = require('../models/trainer')

var express = require('express')
var router = express.Router()

router.get('/', function (req, res) {
  Trainer.findOne({name: 'Ash Ketchum'}, function (err, trainer) {
    console.log('trainers are')
    console.log(trainer, trainer.id)

    var pikachu = new Pokemon({
      name: 'Pikachu',
      kind: 'Electric',
      power: 40,
      trainer_id: trainer.id
    })

    pikachu.save()
  })

  res.send('pokemon index page')
})

router.get('/pikachu', function (req, res) {
  Pokemon
  .findOne({name: 'Pikachu'})
  .populate('trainer_id')
  .exec(function (err, pokemon) {
    if (err) return err
    console.log(pokemon)
  })

  res.send('return pikachu with trainer details')
})

module.exports = router
