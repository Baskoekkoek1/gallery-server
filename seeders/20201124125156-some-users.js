"use strict";
const bcrypt = require("bcrypt");
const { SALT_ROUNDS } = require("../config/constants");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("users", [
      {
        name: "Bas",
        email: "bas@fakeemail.com",
        password: bcrypt.hashSync("abc", SALT_ROUNDS),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Mats",
        email: "mats@fakeemail.com",
        password: bcrypt.hashSync("abc", SALT_ROUNDS),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Lilian",
        email: "lilian@fakeemail.com",
        password: bcrypt.hashSync("abc", SALT_ROUNDS),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Marije",
        email: "marije@fakeemail.com",
        password: bcrypt.hashSync("abc", SALT_ROUNDS),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Laura",
        email: "laura@fakeemail.com",
        password: bcrypt.hashSync("abc", SALT_ROUNDS),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "A",
        email: "a@a.com",
        password: bcrypt.hashSync("a", SALT_ROUNDS),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};
