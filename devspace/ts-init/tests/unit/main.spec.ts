import { ascNumberSorter } from "../../src/utils/func-lib";

// describe : je décris un jeu de tests
describe("Main", () => {
  // it : prends en paramètre le test en lui-même et une fonction de test, cette fonction prends au minimum un expect
  it("Should hve implicitly a string type", () => {
    let stringVar = "Hello typescript!";
    expect(typeof stringVar).toBe("string");
  });

  it("Should have a forced number type", () => {
    let myNumber: number = 123;
    expect(typeof myNumber).toBe("number");
  });

  it("Should store any value", () => {
    let dummy: any = new Date();
    expect(dummy.getFullYear()).toEqual(2024);
    dummy = 2024;
    expect(dummy).toEqual(2024);

    let casper: unknown = new Date().getFullYear();
    expect(casper).toEqual(2024);
  });

  it("Should return 3 if op1 equals 8 and op2 equals 5", () => {
    expect(ascNumberSorter(8, 5)).toEqual(3);
  });

  it("Should have 2 as first item in an aray after sorting", () => {
    const array: Array<number> = [12, 5, 3, 8, 2];
    // ou de cette façon
    const array2: number[] = [12, 5, 3, 8, 2];

    array.sort(ascNumberSorter); // No need to pass args, args of sort function always have two parameters
    expect(array[0]).toEqual(2);
  });
});
