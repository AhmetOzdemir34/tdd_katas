const {arrayDiff} = require("./script");

describe("24.11.22 3rd kata example", ()=>{
    test("[1,2,2] & [1] should return [2, 2]", ()=>{
        expect(arrayDiff([1,2,2],[1])).toEqual([2, 2]);
    })
    test("[1] & [1] should return []", ()=>{
        expect(arrayDiff([1],[1])).toEqual([]);
    })
    test("[1,2,3] & [1,2] should return [3]", ()=>{
        expect(arrayDiff([1,2,3],[1,2])).toEqual([3]);
    })
    test("[] & [1] should return [1]", ()=>{
        expect(arrayDiff([],[1])).toEqual([]);
    })
})