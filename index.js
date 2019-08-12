"use strict";
module.exports = class Epsilon {
    constructor(allowance) {
        this.allowance = allowance;
        this.target = allowance.target;
        this.deviation = allowance.deviation;
    }
    test(subject) {
        if (Array.isArray(subject)) {
            throw new TypeError("You passed an array where a number should've gone.");
        }
        if ((this.target - this.deviation) < subject && subject < (this.target + this.deviation)) {
            return true;
        }
        else {
            return false;
        }
    }
};
