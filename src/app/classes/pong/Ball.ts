import { Movable } from './Movable';
import { LocationOnCanvas } from './Location';
import { Speed } from './Speed';

export class Ball extends Movable {
    private speed: Speed;

    constructor(width: number, height: number, location: LocationOnCanvas, moveIncrement: number, speed: Speed) {
        super(width, height, location, moveIncrement);
        this.speed = speed;
    }

    goOppToCurrentX(): void {
        this.speed.horiSpeedSprintValue = -this.speed.horiSpeedSprintValue;
    }

    goOppToCurrentY(): void {
        this.speed.vertSpeedSprintValue = -this.speed.vertSpeedSprintValue;
    }

    setNewSpeed(speedVal: number): void {
        this.speed.vertSpeedSprintValue = speedVal;
    }

    move() {
        super.move(this.speed);
    }
}