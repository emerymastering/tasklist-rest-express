const express = require("express");
const app = express();
const port = 4000;

const User = require("./models").user;
const todoList = require("./models").todoList;

app.use(express.json());

app.post("/users", async (req, res, next) => {
  try {
    const email = req.body.email;
    if (!email || email === " ") {
      res.status(400).send("Must provide an email address");
    } else {
      const user = await User.create(req.body);
      res.json(user);
    }
  } catch (e) {
    next(e);
  }
});

app.get("/users/:userId", async (req, res) => {
  try {
    const userId = parseInt(req.params.userId);
    const user = await User.findByPk(userId);
    if (!user) {
      res.status(404).send("User not found");
    } else {
      res.json(user);
    }
  } catch (e) {
    next(e);
  }
});

app.get("/users/:userId/lists", async (req, res, next) => {
  try {
    const userId = parseInt(req.params.userId);
    const user = await User.findByPk(userId, {
      include: [{ model: todoList, attributes: ["name", "userId"] }],
    });
    if (user) {
      res.json(user.todoLists);
    } else {
      res.status(404).send("User not found");
    }
  } catch (e) {
    next(e);
  }
});

app.post("/users/:userId/lists/", async (req, res, next) => {
  try {
    const userId = parseInt(req.params.userId);
    const user = await User.findByPk(userId);
    if (user) {
      const newList = await todoList.create({ userId, ...req.body });
      res.send(newList);
    } else {
      res.status(404).send("User not found");
    }
  } catch (e) {
    next(e);
  }
});

app.put("/users/:userId", async (req, res, next) => {
  try {
    const userId = parseInt(req.params.userId);
    const userToUpdate = await User.findByPk(userId);
    if (!userToUpdate) {
      res.status(404).send("User not found");
    } else {
      const updatedUser = await userToUpdate.update(req.body);
      res.json(updatedUser);
    }
  } catch (e) {
    next(e);
  }
});

// Delete a list
app.delete("/users/:userId/lists/:listId", async (req, res, next) => {
  try {
    const listId = parseInt(req.params.listId);
    const listToDelete = await todoList.findByPk(listId);
    if (!listToDelete) {
      res.status(404).send("List not found");
    } else {
      const deleteList = await listToDelete.destroy();
      res.status(204).send(deleteList);
    }
  } catch (e) {
    next(e);
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
