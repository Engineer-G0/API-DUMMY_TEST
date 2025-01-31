'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Rab extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Rab.belongsTo(models.Group, {foreignKey:'group_id'});
      Rab.belongsTo(models.Type_report_s_curve, {foreignKey: 'type_report_s_curve_id'});
      Rab.belongsTo(models.Project, {foreignKey: 'project_id'});
      Rab.belongsTo(models.Company, {foreignKey: 'company_id'});
      Rab.hasMany(models.Process, {foreignKey:'rab_id'});
      Rab.hasMany(models.History, {foreignKey:'rab_id'});
      Rab.hasMany(models.Report_s_curve, {foreignKey:'rab_id'});
      Rab.hasMany(models.Total, {foreignKey:'rab_id'});
    }
  }
  Rab.init({
    group_id: DataTypes.INTEGER,
    type_report_s_curve_id: DataTypes.INTEGER,
    project_id: DataTypes.INTEGER,
    company_id: DataTypes.INTEGER,
    work_items: DataTypes.STRING,
    vol: DataTypes.INTEGER,
    unit: DataTypes.STRING,
    selling_price: DataTypes.INTEGER,
    user: DataTypes.STRING,
    total: DataTypes.INTEGER,
    status: DataTypes.STRING,
    process: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Rab',
  });
  return Rab;
};