'use strict';
// const {TINYINT} = require("./node_modules/sequelize/types/data-types");
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      tg_user_id: {
        allowNull: false,
        type: Sequelize.BIGINT
      },
      nickname: {
        allowNull: false,
        type: Sequelize.STRING
      },
      registered_at: {
        type: Sequelize.DATE
      },
      user_type: {
        type: Sequelize.SMALLINT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'created_at'
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'updated_at'
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};