'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Group extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Group.hasMany(models.Rab, {foreignKey:'group_id'});
      Group.belongsTo(models.Company, {foreignKey: 'company_id'});
      Group.belongsTo(models.Project, {foreignKey: 'project_id'});
      Group.belongsTo(models.Type_report_s_curve, {foreignKey:'type_report_s_curve_id'});
    }
  }
  Group.init({
    company_id: DataTypes.INTEGER,
    project_id: DataTypes.INTEGER,
    type_report_s_curve_id: DataTypes.INTEGER,
    group_name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Group',
  });
  return Group;
};