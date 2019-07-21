"use strict";

const start = require("./server");

const port = 8080;

const bootstrap = async () => {
  try {
    const server = start();
    server.listen(port, () =>
      console.log(`Application listening on port ${port}`)
    );
  } catch (err) {
    console.error("There was an error in bootstrap", err.stack);
    throw err;
  }
};

module.exports = bootstrap;
