"use strict";

const a = require("./a.cjs");

Object.defineProperty(exports, "b", {
  enumerable: true,
  get: () => () => ({ a }),
});

// Also fails when using:
// exports.b = () => ({ a });
