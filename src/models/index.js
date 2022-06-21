'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const modelInterface = require('./model-interface.js');
const animalSchema = require('./animal.schema.js');
const personSchema = require('./person.schema.js');

const DATABASE_URL = process.env.NODE_ENV === 'test'
  ? 'sqlite::memory'
  : process.env.DATABASE_URL || 'postgres://localhost:5432/401d47-api-app';

const sequelize = new Sequelize(DATABASE_URL);

const animalModel = animalSchema(sequelize, DataTypes);
const personModel = personSchema(sequelize, DataTypes);

// create our associations between tables
// CustomerModel.hasMany(OrderModel, {foreignKey: 'customerId', sourceKey: 'id'});
// OrderModel.belongsTo(CustomerModel, {foreignKey: 'customerId', targetKey: 'id'});

module.exports = {
  sequelize,
  animalInterface: new modelInterface(animalModel),
  personInterface: new modelInterface(personModel),
};