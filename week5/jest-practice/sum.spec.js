const { sum, arithmeticProgression } = require('./sum');

describe("Test operations bla", () => {
    test("Should return the sum of 2 numbers", () => {
        const result = sum(1,2);
        expect(result).toBe(3);
    });

    test("Debe retornar una progresion aritmetica", () => {
        const result = arithmeticProgression(5, 25);
        const result2 = arithmeticProgression(3,37)
        expect(result).toEqual([5, 10, 15, 20, 25]);
        expect(result2).toEqual([3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36])
    })

})

