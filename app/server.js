"use strict";

const Koa = require("koa");
const router = require("./routes");
const bodyParser = require("koa-bodyparser");

module.exports = () => {
  const app = new Koa();

  app.use(bodyParser());
  app.use(router.routes());
  app.use(router.allowedMethods());

  return app;
};
