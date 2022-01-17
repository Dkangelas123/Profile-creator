const Manager = require("../lib/Manager");

test("office number", () => {
  const testValue = 100;
  const El = new Manager("per", 1, "123@gmail.com", testValue);
  expect(El.officeNumber).toBe(testValue);
});

test("office number from getOffice()", () => {
  const testValue = 100;
  const El = new Manager("per", 1, "123@gmail.com", testValue);
  expect(El.getOfficeNumber()).toBe(testValue);
});

test("getRole() should return \"Manager\"", () => {
  const testValue = "Manager";
  const El = new Manager("per", 1, "123@gmail.com", 100);
  expect(El.getRole()).toBe(testValue);
});



