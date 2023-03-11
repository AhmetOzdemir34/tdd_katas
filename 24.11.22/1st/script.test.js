const {squareDigits} = require('./script');

describe('24.11.22 1st kata example', () => {
    test("1 should equals to 1",()=>{
        expect(squareDigits(1)).toBe(1);
    });
    test("234 should equals to 4916",()=>{
        expect(squareDigits(234)).toBe(4916);
    })
    test("0 should equals to 0",()=>{
        expect(squareDigits(0)).toBe(0);
    })
})