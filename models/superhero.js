// We will need our mongoose library
const mongoose = require(`mongoose`);

// Our schema
const SuperheroSchema = new mongoose.Schema({
  realName: {
    type: String,
    required: true
  },
  superheroName: {
    type: String,
    required: false
  },
  age: {
    type: Number,
    required: false
  },
  group: {
    type: String,
    enum: ['X-MEN', 'FANTASTIC FOUR', 'X-FORCE', 'THE AVENGERS', 'THE ETERNALS', 'THE DEFENDERS'],
    default: 'THE DEFENDERS'
  }
}, {
    timestamps: true
  });

// Exporting our Superhero model
module.exports = mongoose.model('Superhero', SuperheroSchema);