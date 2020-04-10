export class Boundaries {
    top: number;
    bottom: number;
    left: number;
    right: number;

    toString() : string {
        return this.top + " - " + this.bottom + " - " + this.left + " - " + this.right;
    }
}