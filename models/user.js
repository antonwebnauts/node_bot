'use strict';
const sequelize = require('../db')
const {
  Model, DataTypes
} = require('sequelize');

  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    tg_user_id: {
      allowNull: false,
      type: DataTypes.BIGINT
    },
    nickname: {
      allowNull: false,
      type: DataTypes.STRING
    },
    registered_at: {
      type: DataTypes.DATE
    },
    user_type: {
      type: DataTypes.SMALLINT
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
      field: 'created_at'
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
      field: 'updated_at'
    }
  }, {
    tableName: 'users',
    timestamps: true,
    underscored: true,
    sequelize,
    modelName: 'User',
  });

module.exports = {
  User: User
}