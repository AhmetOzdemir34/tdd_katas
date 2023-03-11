const {moveZeros} = require("./script");

describe("24.11.22 4th kata example", ()=>{
    test("[1,2,0,{},[1,2]] should return [1,2,{},[1,2],0]", ()=>{
        expect(moveZeros([1,2,0,{},[1,2]])).toEqual([1,2,{},[1,2],0]);
    });
    test("[1,0,0,0,0,2,3] should return [1,2,3,0,0,0,0]", ()=>{
        expect(moveZeros([1,0,0,0,0,2,3])).toEqual([1,2,3,0,0,0,0]);
    });
    test("[9,{},true,0,'0'] should return [9,{},true,'0',0]", ()=>{
        expect(moveZeros([9,{},true,0,'0'])).toEqual([9,{},true,'0',0]);
    });
});