"use strict";
const TodoService = require("./TodoService");

class TodoController {
  static async getTodos(ctx) {
    console.log("Invoked getTodos controller");

    const todos = await TodoService.getTodos();
    ctx.body = todos;
  }

  static async addTodo(ctx) {
    console.log("Invoked addTodo controller");

    const { body: todo } = ctx.request;
    const result = await TodoService.addTodo(todo);
    ctx.body = result;
  }

  static async markAsCompleted(ctx) {
    console.log("Invoked markAsCompleted controller");

    const { id } = ctx.params;
    const { body: todo } = ctx.request;

    const result = await TodoService.markAsCompleted(id, todo);
    ctx.body = result;
  }
}

module.exports = TodoController;
