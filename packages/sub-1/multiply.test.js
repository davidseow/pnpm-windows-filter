const multiply = require("./multiply");

test("multiply 1 * 2 to equal 2", () => {
  expect(multiply(1, 2)).toBe(2);
});

test("multiply 2 * 2 to equal 4", () => {
  expect(multiply(2, 2)).toBe(4);
});
