# IntegerEpsilon

See if two integers (possibly large, like POSIX timestamps) are within the ballpark of each other. I'm using this to account for millisecond variations between start and an end datetimes. I.e. I want two POSIX timestamps to be within X minutes/hours of each other, and minor fluctuations shouldn't matter/fail a test.

```js
const expect = require("chai").expect;
const Epsilon = require("integerepsilon");

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
```
