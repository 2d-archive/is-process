"use strict";

const isObj = require("is-obj");

module.exports = value => {
  //Check whether or not the value is the process
  return isObj(value) && value === process;
};
