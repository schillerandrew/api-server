'use strict';

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('persons', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    age: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    pronouns: {
      type: DataTypes.ENUM,
      values: ['he/him', 'she/her', 'they/them'],
      allowNull: true,
    },
  });
};