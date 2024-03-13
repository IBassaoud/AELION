import { Singleton } from "../../src/patterns/singleton";

describe("Singleton class", () => {
  it("Shoulld return the sam instance", () => {
    const instanceOne: Singleton = Singleton.getInstance();
    const instanceTwo: Singleton = Singleton.getInstance();
    expect(instanceOne).toStrictEqual(instanceTwo);
  });

  it("Should return 1 while asking instanceOcc", () => {
    const instanceOne: Singleton = Singleton.getInstance();
    const instanceTwo: Singleton = Singleton.getInstance();

    expect(instanceOne.instanceOcc).toEqual(1);
    expect(instanceTwo.instanceOcc).toEqual(1);
  });
});
