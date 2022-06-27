'use strict';

class modelInterface {
  constructor(model) {
    this.model = model;
  }

  async create(json) {
    try {
      let instance = await this.model.create(json);
      return instance;
    } catch (err) {
      console.error(err);
      return err;
    }
  }

  async readAll() {
    try {
      let allInstances = await this.model.findAll();
      return allInstances;
    } catch (err) {
      console.error(err);
      return err;
    }
  }

  async readOne(id) {
    try {
      let oneInstance = await this.model.findOne({where: { id } });
      return oneInstance;
    } catch (err) {
      console.error(err);
      return err;
    }
  }

  async update(requestBody, id) {
    try {
      await this.model.update(requestBody, {where: { id }});
      let updatedInstance = await this.model.findOne({where: { id } });
      return updatedInstance;
    } catch (err) {
      console.error(err);
      return err;
    }
  }

  async delete(id) {
    try {
      let deletedInstance = await this.model.findOne({where: { id } });
      await this.model.destroy({where: { id } });
      return deletedInstance;
    } catch (err) {
      console.error(err);
      return err;
    }
  }
}

module.exports = modelInterface;