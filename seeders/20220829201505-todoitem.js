"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return await queryInterface.bulkInsert(
      "todoItems",
      [
        {
          task: "Wash hands",
          todoListId: 1,
          important: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          task: "Pack food",
          todoListId: 2,
          important: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          task: "Play Tennis",
          todoListId: 2,
          important: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    return await queryInterface.bulkDelete("todoItems", null, {});
  },
};
