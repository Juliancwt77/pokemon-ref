var express = require('express')
var router = express.Router()

var Trainer = require('../models/trainer')

router.get('/', function (req, res) {
  var newTrainer = new Trainer({
    name: 'newTrainer',
    region: 'Kanto',
    power: 1000
  })

  console.log(newTrainer)
  newTrainer.save()

  res.send('new trainer updated')
})

router.get('/:id', function (req, res) {
  Trainer.findById(req.params.id, function (err, trainer) {
    if (err) console.log(err)
    console.log(trainer)
  })

  res.send('find trainer by id')
})

module.exports = router
