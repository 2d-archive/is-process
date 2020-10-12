const test = require("ava");
const isProcess = require(".");

test("main", t => {
  t.true(isProcess(process));
  t.false(isProcess(3));
  t.false(isProcess({}));
  t.false(isProcess(new Promise((res) => res([3]))));
  t.false(isProcess([]));
  t.false(isProcess("lmao"));
});
