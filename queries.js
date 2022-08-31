const User = require("./models").user;
const TodoItem = require("./models").todoItem;

async function searchFunc() {
  try {
    const users = await User.findAll({ raw: true });
    const todoItems = await TodoItem.findAll({ raw: true });
    const userById = await User.findByPk(11, { raw: true });
    // const addUser = await User.create({
    //   name: "Bob",
    //   email: "ssd@sdsd.com",
    //   phone: "23238327",
    // });
    const importantTodo = await TodoItem.findAll({
      where: { important: true },
    });
    return { users, todoItems, userById, importantTodo };
  } catch (e) {
    console.error(e);
  }
}
searchFunc().then((todos) => console.log(todos));
