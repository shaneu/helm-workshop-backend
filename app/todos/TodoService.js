"use strict";

const crypto = require("crypto");

const createId = (todo, timestamp) => {
  const hash = crypto.createHash("sha256");
  return hash
    .update(JSON.stringify(todo))
    .update(".")
    .update(timestamp)
    .digest("hex");
};

let todos = [
  { completed: false, id: "1", todo: "Create local k8 cluster" },
  { completed: false, id: "2", todo: "Install Helm" }
];

class TodoService {
  static async getTodos() {
    return todos;
  }

  static async addTodo(todo) {
    const timestamp = new Date().toISOString();
    const id = createId(todo.todo, timestamp);

    const result = { ...todo, id };
    todos.push(result);

    return result;
  }

  static async markAsCompleted(id, todo) {
    todos = todos.reduce((acc, cur) => {
      if (cur.id === id) {
        acc.push(todo);
        return acc;
      }

      acc.push(cur);
      return acc;
    }, []);

    return todo;
  }
}

module.exports = TodoService;
