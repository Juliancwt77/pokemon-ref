var mongoose = require('mongoose')
var express = require('express')

// require route files
var trainerRoutes = require('./routes/trainers')
var pokemonRoutes = require('./routes/pokemons')

mongoose.connect('mongodb://localhost/pokemon-farm')
mongoose.Promise = global.Promise

var app = express()
var port = 4000

app.use('/trainers', trainerRoutes)
app.use('/pokemons', pokemonRoutes)

app.listen(port)
console.log('server started')
