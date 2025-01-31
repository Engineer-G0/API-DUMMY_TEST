'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Daily extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Daily.belongsTo(models.Group, {foreignKey: 'group_id'});
      Daily.belongsTo(models.Type_report_s_curve, {foreignKey: 'type_report_s_curve_id'});
      Daily.belongsTo(models.Project, {foreignKey: 'project_id'});
      Daily.belongsTo(models.Company, {foreignKey: 'company_id'});
      Daily.hasMany(models.Qty_update_log, {foreignKey: 'daily_id'});
      Daily.hasMany(models.Last_qty_update, {foreignKey: 'daily_id'});
    }
  }
  Daily.init({
    group_id: DataTypes.INTEGER,
    type_report_s_curve_id: DataTypes.INTEGER,
    project_id: DataTypes.INTEGER,
    company_id: DataTypes.INTEGER,
    day_at: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Daily',
  });
  return Daily;
};