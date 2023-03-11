const {dual} = require("./script"); 

describe("08.12.22 1st kata example", ()=>{
    test("[1,2,3,10] should return 7", ()=>{
        expect(dual([1,2,3,10])).toBe(7);
    });

    test("[10,20,20,15] should return 0", ()=>{ // there are 2 horses. same powers.
        expect(dual([10,20,20,15])).toBe(0);
    })

    test("[1,1,1,1,1,5] should return 4", ()=>{
        expect(dual([1,1,1,1,1,5])).toBe(4);
    })
})