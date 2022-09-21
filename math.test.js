const {divide, multiply, subtract, sum} = require("./math");


describe("Math", ()=> {

    it("should sum 2 + 2 to be 4", () => {
        const result = sum(2, 2);
        expect(result).toBe(4);
    });
    
    it("should multiply 3 * 3 to result to 9", () => {
        const result = multiply(3, 3);
        expect(result).toBe(9);
    });
    
    it("should divide 10 / 2 to result 5", () => {
        const result = divide (10, 2);
        expect (result).toBe(5)
    });
    
    it("should subtract 10 - 5 to result 5", () => {
        const result = subtract(10, 5);
        expect (result).toBe(5)
    });

});    

test("Array", () => {
    let days = ["Monday", "Tuesday", "Wednesday",];
    expect(days).toContain("Tuesday");
    expect(days).not.toContain("Friday");
});
