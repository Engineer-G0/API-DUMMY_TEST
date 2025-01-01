'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class History extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      History.belongsTo(models.Rab, {foreignKey: 'rab_id'});
      History.belongsTo(models.Project, {foreignKey: 'project_id'});
      History.belongsTo(models.Company, {foreignKey: 'company_id'});
    }
  }
  History.init({
    user: DataTypes.STRING,
    rab_id: DataTypes.INTEGER,
    project_id: DataTypes.INTEGER,
    company_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'History',
  });
  return History;
};