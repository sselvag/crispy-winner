const Manager = require('../lib/manager');

describe("getName", () => {
    it("should return the manager's name", () => {
        const testEmp = new Manager('Swaathy','4','swaathy.selva@gmail.com','123');
        expect(testEmp.name).toEqual('Swaathy');
    })
});

describe("getId", () => {
    it("should return the manager's id", () => {
        const testEmp = new Manager('Swaathy','4','swaathy.selva@gmail.com','123');
        expect(testEmp.id).toEqual('4');
    })
});

describe("getEmail", () => {
    it("should return the manager's email", () => {
        const testEmp = new Manager('Swaathy','4','swaathy.selva@gmail.com','123');
        expect(testEmp.email).toEqual('swaathy.selva@gmail.com');
    })
});

describe("getOfficeNumber", () => {
    it("should return the manager's office number", () => {
        const testEmp = new Manager('Swaathy','3','swaathy.selva@gmail.com','123');
        expect(testEmp.officeNumber).toEqual('123');
    })
});