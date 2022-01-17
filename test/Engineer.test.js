const Engineer = require("../lib/Engineer");

test("GitHUb account", () => {
  const testValue = "GitHubUser";
  const El = new Engineer("per", 1, "123@gmail.com", testValue);
  expect(El.github).toBe(testValue);
});

test("GitHub username from getGithub()", () => {
  const testValue = "GitHub";
  const El = new Engineer("per", 1, "123@gmail.com", testValue);
  expect(El.getGithub()).toBe(testValue);
});

test("getRole() should return \"Engineer\"", () => {
  const testValue = "Engineer";
  const El = new Engineer("per", 1, "123@gmail.com", "GitHub");
  expect(El.getRole()).toBe(testValue);
});
