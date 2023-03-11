const {getSum} = require("./script");

describe("12.01.23 1st kata example",()=>{
    test("both number positive", ()=>{
        expect(getSum(3,6)).toBe(18);
    })
    test("both same", ()=>{
        expect(getSum(4,4)).toBe(4);
    })
    test("both number negative", ()=>{
        expect(getSum(-4,-1)).toBe(-10);
    })
    test("negative and positive numbers", ()=>{
        expect(getSum(-2,5)).toBe(12);
    })
})