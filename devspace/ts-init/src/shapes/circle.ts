import { COLORS } from "../utils/enums/color.enum";
import { Shape } from "./shape";

export class Circle extends Shape {
  private _radius: number = 0;

  set radius(radius: number) {
    this._radius = radius;
  }

  perimeter(): number {
    return Math.sqrt(Math.PI * this._radius);
  }

  paint(color: COLORS): string {
    return `Je colore en ${color}`;
  }
}
