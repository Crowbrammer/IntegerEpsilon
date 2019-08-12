const expect = require("chai").expect;
const Epsilon = require("../index.js");

describe("Integer Epsilon", () => {
    let epsilon;
    before(() => {
        epsilon = new Epsilon({
            target: 18000000,
            deviation: 1000 * 60 * 3
        }) 
    });
    it("Handles a thousand above", () => {
        expect(epsilon.test(18001000)).to.be.true;
    });
    it("Handles a thousand below", () => {
        expect(epsilon.test(18001000)).to.be.true;
    });
    it("Handles a thousand right on the money", () => {
        expect(epsilon.test(18000000)).to.be.true;
    });
    it("Handles a string", () => {
        expect(epsilon.test("18000000")).to.be.true;
    });
    it("Handles an array", () => {
        expect(() => epsilon.test([18000000])).to.throw(TypeError, "You passed an array where a number should've gone.");
    })
});