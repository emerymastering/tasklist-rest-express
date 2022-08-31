const { user, todoItem, todoList, tag } = require("./models");

async function findTodoWithTags() {
  const items = await todoItem.findAll({ include: [tag] });
  return items.map((item) => item.toJSON());
}
findTodoWithTags().then((items) => console.log("items with tags", items));

// async function listsWithUsers() {
//   const lists = await todoList.findAll({
//     include: [user],
//   });

//   return lists.map((list) => list.toJSON());
// }

// async function listsWithUsers() {
//   const lists = await todoList.findAll({
//     include: [{ model: user, attributes: ["name"] }],
//   });
//   return lists.map((list) => list.toJSON());
// }

// listsWithUsers().then((lists) => console.log(lists));

// async function getUsers() {
//   const allUsers = await user.findAll({
//     include: { model: todoList, attributes: ["name"] },
//   });
//   return allUsers.map((user) => user.toJSON());
// }

// getUsers().then((users) => console.log(users));

// async function getUserWithList(id) {
//   const result = await user.findByPk(id, { include: [todoList] });
//   return result.toJSON();
// }

// getUserWithList(2).then((user) => console.log("user by id with lists", user));

// async function getImportantTodos() {
//   const result = await todoItem.findAll({
//     where: { important: true },
//     include: { model: todoList, attributes: ["name"] },
//   });
//   return result.map((item) => item.toJSON());
// }

// getImportantTodos().then((items) => console.log("important todoItems", items));

// async function getUserWithListTodo(id) {
//   const result = await user.findByPk(id, {
//     include: [
//       {
//         model: todoList,
//         attributes: ["name"],
//         include: { model: todoItem, attributes: ["task"] },
//       },
//     ],
//   });
//   return result.toJSON();
// }

// getUserWithListTodo(1).then((user) => console.log(user));

// async function itemsWithTags() {
//   const items = await todoItem.findAll({ include: [tag] });
//   return items.map((item) => item.get({ plain: true }));
// }

// itemsWithTags().then((items) => console.log("items with tags", items));
