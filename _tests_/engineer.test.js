const Engineer = require('../lib/engineer');

describe("getName", () => {
    it("should return the engineer's name", () => {
        const testEmp = new Engineer('Swaathy','2','swaathy.selva@gmail.com','sselvag');
        expect(testEmp.name).toEqual('Swaathy');
    })
});

describe("getId", () => {
    it("should return the engineer's id", () => {
        const testEmp = new Engineer('Swaathy','2','swaathy.selva@gmail.com','sselvag');
        expect(testEmp.id).toEqual('2');
    })
});

describe("getEmail", () => {
    it("should return the engineer's email", () => {
        const testEmp = new Engineer('Swaathy','2','swaathy.selva@gmail.com','sselvag');
        expect(testEmp.email).toEqual('swaathy.selva@gmail.com');
    })
});

describe("getGithub", () => {
    it("should return the engineer's gitHub", () => {
        const testEmp = new Engineer('Swaathy','2','swaathy.selva@gmail.com','sselvag');
        expect(testEmp.gitHub).toEqual('sselvag');
    })
});