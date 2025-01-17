'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Last_qty_update extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Last_qty_update.belongsTo(models.Daily, {foreignKey: 'daily_id'})
    }
  }
  Last_qty_update.init({
    daily_id: DataTypes.INTEGER,
    last_qty_update: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Last_qty_update',
  });
  return Last_qty_update;
};