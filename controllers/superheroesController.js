const Superhero = require('../models/superhero');

exports.index = (req, res) => {
  Superhero.find()
    .then(superheroes => res.status(200).json(superheroes))
    .catch(err => res.status(404).send(err));
};


exports.show = (req, res) => {
  Superhero.findOne({
    _id: req.params.id
  })
    .then(superhero => res.status(200).json(superhero))
    .catch(err => res.status(404).json(err));
};


exports.create = async (req, res) => {
  Superhero.create(req.body)
    .then(() => res.status(200).json({ success: "New superhero created" }))
    .catch(err => res.status(404).json(err));
};


exports.update = (req, res) => {
  Superhero.updateOne({
    _id: req.body.id
  }, req.body, {
      runValidators: true
    })
    .then(() => res.status(200).json({ success: "Superhero updated" }))
    .catch(err => res.status(404).json(err));
};


exports.destroy = (req, res) => {
  Superhero.deleteOne({
    _id: req.body.id
  })
    .then(() => res.status(200).json({ success: "Superhero deleted" }))
    .catch(err => res.status(404).json(err));
};