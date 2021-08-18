const multiply = require("./multiply2");

test("multiply 5 * 2 to equal 10", () => {
  expect(multiply(5, 2)).toBe(10);
});
