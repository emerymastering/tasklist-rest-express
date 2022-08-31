"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("users", [
      {
        name: "Denis",
        email: "info@emerymastering.nl",
        phone: "123456723983",
        height: "192",
        password: "pass01",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Ksenija",
        email: "capric@list.ru",
        phone: "12345672937293",
        height: "176",
        password: "pass02",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Mark",
        email: "mark@mastering.lt",
        phone: "12342372387",
        height: "132",
        password: "pass03",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
  },
};
