import css from './all.css'
import name from './beer.nd'
import json from './pet.json'

var image = new Image()
image.src = require('./logo.png')
document.body.appendChild(image)
console.log(json)
console.log(`Run!`)
