'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Project extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Project.hasMany(models.History, {foreignKey: 'project_id'});
      Project.hasMany(models.Delay, {foreignKey: 'project_id'});
      Project.hasMany(models.Group, {foreignKey: 'project_id'});
      Project.hasMany(models.Type_report_s_curve, {foreignKey: 'project_id'});
      Project.belongsTo(models.Company, {foreignKey: 'company_id'});
    }
  }
  Project.init({
    company_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    start_date: DataTypes.DATE,
    end_date: DataTypes.DATE,
    created_by: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Project',
  });
  return Project;
};