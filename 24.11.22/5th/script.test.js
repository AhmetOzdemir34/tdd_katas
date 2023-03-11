const {generateHashtag} = require("./script");
describe("24.11.22 5th kata example", ()=>{
    test("should return false for empty string",()=>{
        expect(generateHashtag("   ")).toBe(false);
    });
    test("should return expected result with normal conditionals.",()=>{
        expect(generateHashtag("say my name")).toBe("#SayMyName");
    });
    test("should return false if it is bigger than 140 char.",()=>{
        expect(generateHashtag("Ahme"+"t".repeat(136))).toBe(false);
    });
})