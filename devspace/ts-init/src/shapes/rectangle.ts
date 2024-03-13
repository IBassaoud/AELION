import { COLORS } from "../utils/enums/color.enum";
import { Shape } from "./shape";

export class Rectangle extends Shape {
  private _length: number = 0;
  private _width: number = 0;

  set length(length: number) {
    this._length = length;
  }

  set width(width: number) {
    this._width = width;
  }

  perimeter(): number {
    return this._length * this._width;
  }

  paint(color: COLORS): string {
    return `Je peins en ${color}`;
  }
}
