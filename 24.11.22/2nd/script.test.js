const {solution} = require("./script");
describe("24.11.22 2nd kata example", ()=>{
    test("negative integer numbers should return 0", ()=>{
        expect(solution(-1)).toBe(0);
    })
    test("4 should return 3", ()=>{ // tested only 3
        expect(solution(6)).toBe(8);
    })
    test("6 should return 8", ()=>{ // tested 3 and 5 with min number
        expect(solution(6)).toBe(8);
    })
    test("10 should return 23", ()=>{ // example in kata description
        expect(solution(10)).toBe(23);
    })
})