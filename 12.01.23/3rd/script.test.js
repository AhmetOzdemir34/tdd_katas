const {minMinMax} = require("./script");

describe("12.01.23 3rd kata example", ()=>{
    test("[-4, 9, 0, -3, -2] should return [-4, -1, 9]", ()=>{
        expect(minMinMax([-4, 9, 0, -3, -2])).toEqual([-4, -1, 9]);
    });
    test("[-100, 0, 100] should return [-100, -99, 100]", ()=>{
        expect(minMinMax([-100, 0, 100])).toEqual([-100, -99, 100]);
    });
    test("[1,3,5,7,9] should return [1,2,9]", ()=>{
        expect(minMinMax([1,3,5,7,9])).toEqual([1,2,9]);
    });
});