"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "galleries",
      [
        {
          title: "Bas' gallery",
          description:
            "My gallery contains a lot of van Gogh, for the obvious reasons!",
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Mats' gallery",
          description:
            "To me it is all about Monet, I have a thing for French impressionism.",
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Lilian's gallery",
          description: "William Turner moves me to tears",
          userId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Marije's gallery",
          description: "Look at this old ceramic!",
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
