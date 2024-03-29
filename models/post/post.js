const validator = require("validator");
const bcrypt = require("bcryptjs");

module.exports = (sequelize, DataTypes, Sequelize) => {
  const post = sequelize.define("post", {
    post_Id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    Name: {
      type: DataTypes.STRING,
    },
    image: {
      type: DataTypes.STRING,
    },
    Profile_Url: {
      type: DataTypes.STRING,
    },
    Email: {
      type: DataTypes.STRING,
      unique: true,
    },
    Contact: {
      type: DataTypes.STRING,
      unique: true,
    },
    Status: {
      type: DataTypes.STRING,
    },
    Identification: {
      type: DataTypes.STRING,
    },
    IdNumber: {
      type: DataTypes.STRING,
      unique: true,
    },
    Owner_Name: {
      type: DataTypes.STRING,
    },
    Location: {
      type: DataTypes.STRING,
    },
    Description: {
      type: DataTypes.STRING,
    },
  });

  return post;
};
