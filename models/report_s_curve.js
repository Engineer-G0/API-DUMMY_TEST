'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Report_s_curve extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Report_s_curve.belongsTo(models.Rab, {foreignKey:'rab_id'});
    }
  }
  Report_s_curve.init({
    rab_id: DataTypes.INTEGER,
    total_process: DataTypes.INTEGER,
    weekly_progress: DataTypes.INTEGER,
    weekly_cumulative_progress: DataTypes.INTEGER,
    realization_of_weekly_progress: DataTypes.INTEGER,
    cumulative_realization_of_weekly_progress: DataTypes.INTEGER,
    deviation: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Report_s_curve',
  });
  return Report_s_curve;
};