import { COLORS } from "../utils/enums/color.enum";
import { Paintable } from "../utils/interfaces/paintable";

export class Product implements Paintable {
    private _id: string = "";
    private _label: string = "";
    private _stock: number = 0;

    public readonly CATEGORY = 'Product'; // Ne peut pas être muter

    get id() {
        return this._id;
    }

    set id(id: string) {
        this._id = id;
    }

    get label(){
        return this._label;
    }

    set label(label: string) {
        this._label =  label;
    }

    get stock() {
        return this._stock;
    }

    set stock(stock: number) {
        this._stock = stock;
    }

    paint(color: COLORS): string {
    return `Colorisation en ${color}`;
    }
}