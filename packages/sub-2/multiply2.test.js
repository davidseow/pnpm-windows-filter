const multiply = require("./multiply2");

test("multiply 5 * 2 to equal 10", () => {
  expect(multiply(5, 2)).toBe(10);
});

test("multiply 5 * 3 to equal 15", () => {
  expect(multiply(5, 3)).toBe(15);
});
