const {countConsonants} = require("./script");

describe("12.01.23 2nd kata example", ()=>{
    test("normal example.",()=>{
        expect(countConsonants("normal")).toBe(4);
    })
    test("only banned example.",()=>{
        expect(countConsonants("aeiou")).toBe(0);
    })
    test("only one letter.",()=>{
        expect(countConsonants("h".repeat(10))).toBe(1);
    })
    test("a letter used with uppercase and lowercase.",()=>{
        expect(countConsonants("ayAkKabi")).toBe(3);
    })
});