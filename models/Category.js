const { Model, DataTypes, INTEGER } = require('sequelize');
const sequelize = require('../config/connection.js');

class Category extends Model {}
Category.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize, //link to sequelize
    timestamps: false, //if true your table gets a created at and a updated at column
    freezeTableName: true, //
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;