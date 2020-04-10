import { Movable } from './Movable';
import { LocationOnCanvas } from './Location';
import { Speed } from './Speed';

export class Bat extends Movable {
    private speed: Speed;

    constructor(width: number, height: number, location: LocationOnCanvas, moveIncrement: number) {
        super(width, height, location, moveIncrement);
        this.speed = new Speed(0, 0);
    }

    goDown(ratioChange: number) {
        if (ratioChange < 0 || ratioChange > 1) return;
        this.speed.vertSpeedSprintValue = Math.min(1, this.speed.vertSpeedSprintValue + ratioChange);
    }

    goUp(ratioChange: number) {
        if (ratioChange < 0 || ratioChange > 1) return;
        this.speed.vertSpeedSprintValue = Math.max(-1, this.speed.vertSpeedSprintValue - ratioChange);
    }

    move() {
        super.move(this.speed);
    }
}