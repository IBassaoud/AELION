import { Rectangle } from "../../src/shapes/rectangle";
import { COLORS } from "../../src/utils/enums/color.enum";

describe("Shape test", () => {
  let shape: Rectangle;

  beforeEach(() => {
    shape = new Rectangle();
    shape.length = 10;
    shape.width = 5;
  });

  it("Should say 'Je peins en Vert'", () => {
    const paint = shape.paint(COLORS.GREEN);

    expect(paint).toBe("Je peins en Vert");
  })
});
