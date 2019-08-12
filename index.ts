interface Allowance {
    target: number,
    deviation: number
}

module.exports = class Epsilon {
    // This is TS
    private target: number;
    private deviation: number;
    constructor(private allowance: Allowance) {
        this.target = allowance.target;
        this.deviation = allowance.deviation
    }

    test(subject: number): boolean {
        if (Array.isArray(subject)) {
            throw new TypeError("You passed an array where a number should've gone.");
        }

        if ((this.target - this.deviation) < subject && subject < (this.target + this.deviation)) {
            return true;
        } else {
            return false;
        }
    }
}