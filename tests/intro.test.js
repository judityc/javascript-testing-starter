import { describe, test, it, expect } from "vitest";
import { calculateAverage, fizzBuzz, max } from "../src/intro";

describe("max", () => {
  it("should return the first argument if it is greater", () => {
    //Arrange
    const a = 2;
    const b = 1;
    //Act
    const result = max(a, b);
    //Asset
    expect(result).toBe(2);
  });
  it("should return the second argument if it is greater", () => {
    expect(max(1, 2)).toBe(2);
  });
  it("should return the first argument if arguments are equal", () => {
    expect(max(1, 1)).toBe(1);
  });
});

describe("fizzBuzz", () => {
  it("should return the FizzBuzz if arg are devisible by 3 and 5", () => {
    expect(fizzBuzz(15)).toBe("FizzBuzz");
  });
  it("should return the Fizz if arg is only devisible by 3", () => {
    expect(fizzBuzz(3)).toBe("Fizz");
  });
  it("should return the Buzz if arg is only devisible by 5", () => {
    expect(fizzBuzz(5)).toBe("Buzz");
  });
  it("should return the string if arg is not devisible by 3 and 5", () => {
    expect(fizzBuzz(1)).toBe("1");
  });
});

describe("calculateAverage", () => {
  it("should return NaN if given an empty arr", () => {
    expect(calculateAverage([])).toBe(NaN);
  });
  it("should calculate the average of arr with single element", () => {
    expect(calculateAverage([1])).toBe(1);
  });
  it("should calculate the average of arr with two elements", () => {
    expect(calculateAverage([1, 2])).toBe(1.5);
  });
  it("should calculate the average of arr with three elements", () => {
    expect(calculateAverage([1, 2, 3])).toBe(2);
  });
});
