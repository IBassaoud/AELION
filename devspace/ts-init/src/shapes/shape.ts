import { COLORS } from "../utils/enums/color.enum";
import { Paintable } from "../utils/interfaces/paintable";

export abstract class Shape implements Paintable {
  abstract perimeter(): number;

  abstract paint(color: COLORS): string;
}
