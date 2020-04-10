import { LocationOnCanvas } from './Location';
import { Speed } from './Speed';
import { Boundaries } from './Boundaries';

export abstract class Movable {
    private width: number;
    private height: number;
    private location: LocationOnCanvas;
    private moveIncrement: number;

    constructor(width: number, height: number, location: LocationOnCanvas, moveIncrement: number) {
        this.width = width;
        this.height = height;
        this.location = location;
        this.moveIncrement = moveIncrement;
    }

    public move(speed: Speed) {
        this.location.xCoOrd += (this.moveIncrement * speed.horiSpeedSprintValue);
        this.location.yCoOrd += (this.moveIncrement * speed.vertSpeedSprintValue);
    }

    public getLocationOnCanvas(): LocationOnCanvas {
        return this.location;
    }

    public getWidth(): number {
        return this.width;
    }

    public getHeight(): number {
        return this.height;
    }

    public setHeight(newHeigt: number): void {
        this.height = newHeigt;
    }

    getCollisionBoundaries(): Boundaries {
        return {
            left: this.location.xCoOrd - this.width / 2,
            right: this.location.xCoOrd + this.width / 2,
            top: this.location.yCoOrd - this.height / 2,
            bottom: this.location.yCoOrd + this.height / 2, 
        }
    }
}