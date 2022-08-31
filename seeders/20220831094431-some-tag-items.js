"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("itemTags", [
      { todoItemId: 1, tagId: 1, createdAt: new Date(), updatedAt: new Date() },
      { todoItemId: 2, tagId: 2, createdAt: new Date(), updatedAt: new Date() },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return await queryInterface.bulkDelete("itemTags", null, {});
  },
};
