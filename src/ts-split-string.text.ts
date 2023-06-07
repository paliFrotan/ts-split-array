import { splitStringToArray } from "./ts-split-string";
describe("test add function", () => {
  it("should return [] for empty string", () => {
    expect(splitStringToArray("")).toEqual([]);
  });

  it("should split 'abc' into ['ab', 'c_']", () => {
    expect(splitStringToArray("abc")).toEqual(["ab", "c_"]);
  });
  
  it("should split 'abcdef' into ['ab', 'cd', 'ef']", () => {
    expect(splitStringToArray("abcdef")).toEqual(["ab", "cd", "ef"]);
  });

  it("should split 'a' into ['a_']", () => {
    expect(splitStringToArray("a")).toEqual(["a_"]);
  });
 
});
