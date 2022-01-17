const Employee = require("../lib/Employee");


describe("Employee", () => {
    it(" instantiate Employee instance", () => {
        const El = new Employee();
        expect(typeof(El)).toBe("object");

    });


    it("set name", () => {
        const name = "Angel";
        constelNew= new Employee(name);
        expect(El.name).toBe(name);
    });


    it("set email", () => {
        const testValue = "123@gmail.com";
        const El = new Employee("per", 1, testValue);
        expect(El.email).toBe(testValue);
    });


    it("set id", () => {
        const testValue = 100;
        const El = new Employee("per", testValue);
        expect(El.id).toBe(testValue);
    });


    describe("getName", () => {
        it("get name from getName()", () => {
            const testValue = "Angel";
            const El = new Employee(testValue);
            expect(El.getName()).toBe(testValue);
        });
    });
    
    
    describe("getEmail", () => {
        it("get email from getEmail()", () => {
            const testValue = "123@gmail.com";
            const El = new Employee("per", 1, testValue);
            expect(El.getEmail()).toBe(testValue);
        });
    });
    

    describe("getId", () => {
        it("get id from getId()", () => {
            const testValue = 100;
            const El = new Employee("per", testValue);
            expect(El.getId()).toBe(testValue);
        });
    });
    

    describe("getRole", () => {
        it("getRole() should return \"Employee\"", () => {
            const testValue = "Employee";
            const El = new Employee("Angel", 1, "123@gmail.com");
            expect(El.getRole()).toBe(testValue);
        });
    });
    });     
