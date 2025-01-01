'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Report_s_curves', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      rab_id: {
        type: Sequelize.INTEGER
      },
      total_process: {
        type: Sequelize.INTEGER
      },
      weekly_progress: {
        type: Sequelize.INTEGER
      },
      weekly_cumulative_progress: {
        type: Sequelize.INTEGER
      },
      realization_of_weekly_progress: {
        type: Sequelize.INTEGER
      },
      cumulative_realization_of_weekly_progress: {
        type: Sequelize.INTEGER
      },
      deviation: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Report_s_curves');
  }
};