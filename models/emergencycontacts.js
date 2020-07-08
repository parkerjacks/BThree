'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class EmergencyContact extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.EmergencyContact.belongsTo(models.User);
    }
  };
  EmergencyContact.init({
    phoneNumber: DataTypes.INTEGER,
    relationship: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'EmergencyContact',
  });
  return EmergencyContact;
};