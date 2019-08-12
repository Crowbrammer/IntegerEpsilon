In my code, there's a test to see that an end datetime is X hours from now. I think depending on how close to the end of a second (is it 05:59:00:001 PM or 05:59:00:999 PM?), it can be exactly the duration apart I set, or it can be 1000 (milliseconds) above 1000 * 60 * 60 * 5. I searched for an epsilon package that handled integers, but they all dealt with floating points. 

My ears deafened and vision blurred with disappointment (not really), so I created this package.

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
