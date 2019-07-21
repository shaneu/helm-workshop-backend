"use strict";
const Router = require("koa-router");
const router = new Router();

const TodoController = require("./todos/TodoController");

router.get("/todos", TodoController.getTodos);
router.post("/todos", TodoController.addTodo);
router.put("/todos/:id", TodoController.markAsCompleted);

module.exports = router;
