"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "galleries",
      [
        {
          title: "Bas' gallery",
          description: "This gallery belongs to Bas",
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Mats' gallery",
          description: "This gallery belongs to Mats",
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Lilian's gallery",
          description: "This gallery belongs to Lilian",
          userId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Marije's gallery",
          description: "This gallery belongs to Marije",
          userId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Laura's gallery",
          description: "This gallery belongs to Laura",
          userId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("galleries", null, {});
  },
};
