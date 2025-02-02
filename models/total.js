'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Total extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Total.belongsTo(models.Rab, {foreignKey: 'rab_id'});
      Total.belongsTo(models.Group, {foreignKey: 'group_id'});
    }
  }
  Total.init({
    group_id: DataTypes.INTEGER,
    rab_id: DataTypes.INTEGER,
    total: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Total',
  });
  return Total;
};