'use strict';

const { server } = require('../src/server');
const supertest = require('supertest');
const request = supertest(server);

const { sequelize } = require('../src/models');

beforeAll(async () => {
  await sequelize.sync();
});

afterAll(async () => {
  await sequelize.sync();
});

describe('Server Testing', () => {

  describe('Error handler testing', () => {

    test('404 on a bad route', async () => {
      let response = await request.get('/fake');
      expect(response.status).toEqual(404);
      expect(response.text).toEqual('Not Found');
    });

    test('404 on a bad method', async () => {
      let response = await request.patch('/person');
      expect(response.status).toEqual(404);
      expect(response.text).toEqual('Not Found');
    });

  });

  let animal = {
    'name': 'Mo',
    'type': 'cat',
  };

  let person = {
    name: 'Andrew',
    age: 36,
  };

  describe('REST route tesing', () => {

    describe('Animal routes', () => {

      test('Create a record using POST', async () => {
        let response = await request.post('/animal').send(animal);
        expect(response.status).toEqual(200);
        expect(response.body.name).toEqual('Mo');
        expect(response.body.type).toEqual('cat');
      });

      test('Read a list of records using GET', async () => {
        let response = await request.get('/animal');
        expect(response.status).toEqual(200);
      });

      test('Read a record using GET', async () => {
        let response = await request.get('/animal/1');
        expect(response.status).toEqual(200);
        expect(response.body.name).toEqual('Mo');
        expect(response.body.type).toEqual('cat');
      });

      test('Update a record using PUT', async () => {
        let response = await request.put('/animal/1');
        expect(response.status).toEqual(200);
        expect(response.body.name).toEqual('Mo');
        expect(response.body.type).toEqual('cat');
      });

      test('Destroy a record using DELETE', async () => {
        let response = await request.delete('/animal/1');
        expect(response.status).toEqual(200);
        expect(response.body.name).toEqual('Mo');
        expect(response.body.type).toEqual('cat');
      });

    });

    describe('Person routes', () => {

      test('Create a record using POST', async () => {
        let response = await request.post('/person').send(person);
        expect(response.status).toEqual(200);
        expect(response.body.name).toEqual('Andrew');
        expect(response.body.age).toEqual(36);
      });

      test('Read a list of records using GET', async () => {
        let response = await request.get('/person');
        expect(response.status).toEqual(200);
      });

      test('Read a record using GET', async () => {
        let response = await request.get('/person/1');
        expect(response.status).toEqual(200);
        expect(response.body.name).toEqual('Andrew');
        expect(response.body.age).toEqual('36');
      });

      test('Update a record using PUT', async () => {
        let response = await request.put('/person/1');
        expect(response.status).toEqual(200);
        expect(response.body.name).toEqual('Andrew');
        expect(response.body.age).toEqual('36');
      });

      test('Destroy a record using DELETE', async () => {
        let response = await request.delete('/person/1');
        expect(response.status).toEqual(200);
        expect(response.body.name).toEqual('Andrew');
        expect(response.body.age).toEqual('36');
      });
    });
  });
});