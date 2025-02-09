"use strict";

const b = require("./b.cjs");

Object.defineProperty(exports, "a", {
  enumerable: true,
  get: () => () => ({ b }),
});
