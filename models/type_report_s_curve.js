'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Type_report_s_curve extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Type_report_s_curve.belongsTo(models.Project, {foreignKey: 'project_id'});
      Type_report_s_curve.hasMany(models.Group, {foreignKey:'type_report_s_curve_id'});
    }
  }
  Type_report_s_curve.init({
    type_report: DataTypes.STRING,
    project_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Type_report_s_curve',
  });
  return Type_report_s_curve;
};