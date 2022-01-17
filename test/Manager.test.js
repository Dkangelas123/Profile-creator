const Manager = require("../lib/Manager");

test("office number", () => {
  const testValue = 100;
  const e = new Manager("per", 1, "test@test.com", testValue);
  expect(e.officeNumber).toBe(testValue);
});

test("office number from getOffice()", () => {
  const testValue = 100;
  const e = new Manager("per", 1, "test@test.com", testValue);
  expect(e.getOfficeNumber()).toBe(testValue);
});

test("getRole() should return \"Manager\"", () => {
  const testValue = "Manager";
  const e = new Manager("per", 1, "123@gmail.com", 100);
  expect(e.getRole()).toBe(testValue);
});



