"use strict";

const bootstrap = require("./bootstrap");

(async () => {
  try {
    await bootstrap();
  } catch (err) {
    console.error("There was an error initing app", err.stack);
    setTimeout(() => process.exit(131), 1000);
  }
})();
