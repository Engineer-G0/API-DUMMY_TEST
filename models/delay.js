'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Delay extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Delay.belongsTo(models.Project, {foreignKey:'project_id'});
    }
  }
  Delay.init({
    expected_deadline: DataTypes.INTEGER,
    project_id: DataTypes.INTEGER,
    delay: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Delay',
  });
  return Delay;
};