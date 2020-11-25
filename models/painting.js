"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class painting extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      painting.belongsTo(models.gallery);
    }
  }
  painting.init(
    {
      apiID: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "painting",
    }
  );
  return painting;
};
