import { COLORS } from "../enums/color.enum";

export interface Paintable {
  paint(color: COLORS): string;
}
