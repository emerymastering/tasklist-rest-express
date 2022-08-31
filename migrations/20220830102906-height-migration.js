"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn(
      "users",
      "height",
      { type: Sequelize.STRING },
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("users", "height", {});
  },
};
