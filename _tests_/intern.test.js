const Intern = require('../lib/intern');

describe("getName", () => {
    it("should return the intern's name", () => {
        const testEmp = new Intern('Swaathy','3','swaathy.selva@gmail.com','BCS');
        expect(testEmp.name).toEqual('Swaathy');
    })
});

describe("getIde", () => {
    it("should return the intern's id", () => {
        const testEmp = new Intern('Swaathy','3','swaathy.selva@gmail.com','BCS');
        expect(testEmp.id).toEqual('3');
    })
});

describe("getEmail", () => {
    it("should return the intern's email", () => {
        const testEmp = new Intern('Swaathy','3','swaathy.selva@gmail.com','BCS');
        expect(testEmp.email).toEqual('swaathy.selva@gmail.com');
    })
});

describe("getSchool", () => {
    it("should return the intern's school", () => {
        const testEmp = new Intern('Swaathy','3','swaathy.selva@gmail.com','BCS');
        expect(testEmp.school).toEqual('BCS');
    })
});