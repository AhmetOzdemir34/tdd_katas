const { hasSurvived } = require("./script");

describe("22.12.22 1st kata example",()=>{
    test("should true in normal challange.", ()=>{
        expect(hasSurvived([1,2,3,4],[5,6,7,8])).toBe(true);
    });
    test("[],[10,20,30] should return true | attackers value is empty array.", ()=>{
        expect(hasSurvived([],[10,20,30])).toBe(true);
    });
    test("[10,20,30],[] should return false | defenders value is empty array.", ()=>{
        expect(hasSurvived([10,20,30], [])).toBe(false);
    });
    test("[10,20],[5,25,30] should return true | defenders will win with damages!", ()=>{
        expect(hasSurvived([10,20],[5,25,30])).toBe(true);
    });
    test("[50,20,33],[65,5] should return false | attackers will win with damages!", ()=>{
        expect(hasSurvived([50,20,33],[65,5])).toBe(false);
    });
})