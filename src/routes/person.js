'use strict';

const express = require('express');
const { personInterface } = require('../models');

const router = express.Router();

// POST
router.post('/person', async (req, res, next) => {
  let person = req.body;
  let response = await personInterface.create(person);
  res.status(200).send(response);
});

// GET
router.get('/person', async (req, res, next) => {
  let allPersons = await personInterface.readAll();
  res.status(200).send(allPersons);
});

// GET one
router.get('/person/:id', async (req, res, next) => {
  let { id } = req.params;
  let onePerson = await personInterface.readOne(id);
  res.status(200).send(onePerson);
});

// PUT
router.put('/person/:id', async (req, res, next) => {
  let { id } = req.params;
  let updatedPerson = await personInterface.update(req.body, id);
  res.status(200).send(updatedPerson);
});

// DELETE
router.delete('/person/:id', async (req, res, next) => {
  let { id } = req.params;
  let deletedPerson = await personInterface.delete(id);
  res.status(200).send(deletedPerson);
});

module.exports = router;