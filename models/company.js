'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Company extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Company.hasMany(models.History, {foreignKey: 'company_id'});
      Company.hasMany(models.Group, {foreignKey: 'company_id'});
      Company.hasMany(models.Project, {foreignKey: 'company_id'});
      Company.hasMany(models.Type_report_s_curve, {foreignKey: 'company_id'});
      Company.hasMany(models.Daily, {foreignKey: 'company_id'});
    }
  }
  Company.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    logo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Company',
  });
  return Company;
};