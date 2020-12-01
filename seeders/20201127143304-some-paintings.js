"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "paintings",
      [
        {
          apiID: "506c89b2d207d80002001296",
          galleryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          apiID: "5033edb6946de10002000150",
          galleryId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          apiID: "506cea17c194de00020000bd",
          galleryId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          apiID: "506cea17c194de00020000bd",
          galleryId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          apiID: "4eb1c1744bf5a90001008b33",
          galleryId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("paintings", null, {});
  },
};
