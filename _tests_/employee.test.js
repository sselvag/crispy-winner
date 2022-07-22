const Employee = require('../lib/employee');

describe("getName", () => {
    it("should return the employee's name", () => {
        const testEmp = new Employee('Swaathy','1','swaathy.selva@gmail.com');
        expect(testEmp.name).toEqual('Swaathy');
    })
});

describe("getId", () => {
    it("should return the employee's id", () => {
        const testEmp = new Employee('Swaathy','1','swaathy.selva@gmail.com');
        expect(testEmp.id).toEqual('1');
    })
});

describe("getEmail", () => {
    it("should return the employee's email", () => {
        const testEmp = new Employee('Swaathy','1','swaathy.selva@gmail.com');
        expect(testEmp.email).toEqual('swaathy.selva@gmail.com');
    })
});