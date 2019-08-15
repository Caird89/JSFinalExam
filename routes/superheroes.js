// Our router module
const router = require('express').Router();

// Our controller
const SuperheroesController = require('../controllers/superheroesController');

// Our routes
router.get(`/`, SuperheroesController.index);
router.get(`/:id`, SuperheroesController.show);
router.post(`/`, SuperheroesController.create);
router.post(`/update`, SuperheroesController.update);
router.post(`/destroy`, SuperheroesController.destroy);

// We have to export our changes
module.exports = router;