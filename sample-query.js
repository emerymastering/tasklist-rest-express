const User = require("./models").user;
const { Op } = require("sequelize");

async function getAllUsers() {
  try {
    // This is how we can use a query method to get all the users from the database
    // Selects all rows. Resolves with a (possibly empty) array
    // const allUsers = await User.findAll({ raw: true });
    // return allUsers;

    // Select all rows where firstName === 'Dave', but only return the first one.
    // Resolves with an object or undefined (if no matching rows exist)
    // const specificUser = await User.findOne({
    //   where: { name: "Ksenija" },
    //   raw: true,
    // });
    // return specificUser;

    // Select a row by its primary key. Resolves with an object or undefined (if no matching rows exist)
    // const userByPk = await User.findByPk(2, { raw: true });
    // return userByPk;

    // A query using a numeric operator

    const jane = await User.destroy({
      where: { name: "Jane" },
    });
    // console.log(jane); // Don't do this
    // console.log(jane.toJSON()); // This is good!

    const tallUsers = await User.findAndCountAll({
      // WHERE height >= 175
      where: {
        height: {
          [Op.gte]: "120",
          // gte stands for 'greater than or equal'
        },
      },
      offset: 1,
      limit: 2,
      raw: true,
    });
    console.log(tallUsers.count);
    // console.log(tallUsers.rows);
    return tallUsers;
  } catch (e) {
    console.error(e);
  }
}

getAllUsers().then((users) => console.log(users));
