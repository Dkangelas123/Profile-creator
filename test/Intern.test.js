const Intern = require("../lib/Intern");

test("Can set school from constructor", () => {
  const testValue = "utsa";
  const El = new Intern("per", 1, "123@gmail.com", testValue);
  expect(El.school).toBe(testValue);
});

test("Can get school from getSchool()", () => {
  const testValue = "utsa";
  const El = new Intern("per", 1, "123@gmail.com", testValue);
  expect(El.getSchool()).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
  const testValue = "Intern";
  const El = new Intern("per", 1, "123@gmail.com", "utsa");
  expect(El.getRole()).toBe(testValue);
});
