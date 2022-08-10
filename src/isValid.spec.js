import { isValid } from "./index";

describe("isValid", () => {
  it("returns false if parens are unbalanced", () => {
    expect(isValid("((())")).toBe(false);
    expect(isValid("))))")).toBe(false);
    expect(isValid("(")).toBe(false);
    expect(isValid(")")).toBe(false);
    expect(isValid("(())))")).toBe(false);
    expect(isValid("(()()))")).toBe(false);
  });

  it("returns true if parens are balanced and there is content between matching paris", () => {
    expect(isValid("((9))")).toBe(true);
    expect(isValid("((1)2)3")).toBe(true);
    expect(isValid("bici coche (balón) bici coche peluche")).toBe(true);
    expect(isValid("(muñeca) consola bici")).toBe(true);
    expect(isValid("bici coche (balón) bici coche peluche")).toBe(true);
  });

  it("returns false if parens are unbalanced and there is content between matching paris", () => {
    expect(isValid("(9))")).toBe(false);
    expect(isValid("(1)2)3")).toBe(false);
    expect(isValid("1(2")).toBe(false);
    expect(isValid("bici coche (balón bici coche")).toBe(false);
  });

  it("returns false if there are curly or square brackets inside parenthesis", () => {
    expect(isValid("(peluche {) bici")).toBe(false);
  });

  it("returns false if parenthesis are empty", () => {
    expect(isValid("() bici")).toBe(false);
  });
});
