'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Qty_update_log extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Qty_update_log.belongsTo(models.Qty_update_log, {foreignKey: 'daily_id'});
    }
  }
  Qty_update_log.init({
    daily_id: DataTypes.INTEGER,
    qty_update: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Qty_update_log',
  });
  return Qty_update_log;
};