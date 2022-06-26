'use strict';

const express = require('express');
const { animalInterface } = require('../models');

const router = express.Router();

// POST
router.post('/animal', async (req, res, next) => {
  let animal = req.body;
  let response = await animalInterface.create(animal);
  res.status(200).send(response);
});

// GET
router.get('/animal', async (req, res, next) => {
  let allAnimals = await animalInterface.readAll();
  res.status(200).send(allAnimals);
});

// GET one
router.get('/animal/:id', async (req, res, next) => {
  let { id } = req.params;
  let oneAnimal = await animalInterface.readOne(id);
  res.status(200).send(oneAnimal);
});

// PUT
router.put('/animal/:id', async (req, res, next) => {
  let { id } = req.params;
  let updatedAnimal = await animalInterface.update(req.body, id);
  res.status(200).send(updatedAnimal);
});

// DELETE
router.delete('/animal/:id', async (req, res, next) => {
  let { id } = req.params;
  let deletedAnimal = await animalInterface.delete(id);
  res.status(200).send(deletedAnimal);
});

module.exports = router;