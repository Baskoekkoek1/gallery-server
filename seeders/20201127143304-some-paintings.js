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
          apiID: "4eb41497ed2aec0001000202",
          galleryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          apiID: "4eb41497ed2aec0001000202",
          galleryId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          apiID: "4eb41621ab96e100010002d1",
          galleryId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          apiID: "4eb41865ed2aec00010004f6",
          galleryId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          apiID: "4eb41865ed2aec00010004f6",
          galleryId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          apiID: "4eb191804bf5a900010007c6",
          galleryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          apiID: "4eb191d7085cf500010003e1",
          galleryId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          apiID: "4eb193694bf5a90001000af3",
          galleryId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          apiID: "4eb1a0f9b4da1900010023fe",
          galleryId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          apiID: "4eb1a2e7b89d900001003a84",
          galleryId: 5,
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
