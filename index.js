"use strict";

const isObj = require("is-obj");

module.exports = value => {
  return isObj(value) && value === process;
};