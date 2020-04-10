import { Ball } from './Ball';
import { Bat } from './Bat';
import { Boundaries } from './Boundaries';
import { KeysPressedState } from './KeysPressedState';

export class PongGame {
    public ball: Ball;
    public bat: Bat;

    private width: number;
    private height: number;

    constructor(width: number, height: number) {
        this.height = height;
        this.width = width;

        this.ball = new Ball(15, 15, { xCoOrd: width / 2, yCoOrd: height / 2 }, 2,
            { horiSpeedSprintValue: 1, vertSpeedSprintValue: 1 });
        this.bat = new Bat(20, 125, { xCoOrd: 20, yCoOrd: height / 2 }, 1.5);
    }

    progress(keyPressedState: KeysPressedState): Boundaries {
        this.ball.move();

        var paddleBounds = this.bat.getCollisionBoundaries();
        if (keyPressedState.upKeyPressed && paddleBounds.top > 0) {
            this.bat.goUp(.03);
            this.bat.move();
        } else if (keyPressedState.downKeyPressed && paddleBounds.bottom < this.height) {
            this.bat.goDown(.03);
            this.bat.move();
        }
        const boundaries = this.checkCollided();
        return boundaries;
    }

    private checkCollided(): Boundaries {
        let ballBounds = this.ball.getCollisionBoundaries();

        if (ballBounds.bottom >= this.height || ballBounds.top <= 0)
            this.ball.goOppToCurrentY();

        let batBounds = this.bat.getCollisionBoundaries();
        if (ballBounds.left <= batBounds.right &&
            batBounds.right - ballBounds.left <= 3 &&
            ballBounds.bottom >= batBounds.top &&
            ballBounds.top <= batBounds.bottom) {

            this.ball.goOppToCurrentX();

            var vsr = - (this.ball.getLocationOnCanvas().yCoOrd - this.bat.getLocationOnCanvas().yCoOrd)
                / (batBounds.top - this.bat.getLocationOnCanvas().yCoOrd);

            vsr = Math.min(vsr, 1);
            this.ball.setNewSpeed(vsr);
        }

        if (ballBounds.right >= this.width || ballBounds.left <= 0) {
            this.ball.goOppToCurrentX();
        }

        return ballBounds;
    }

    gameCompleted(): boolean {
        var ballBoundries = this.ball.getCollisionBoundaries();
        if (ballBoundries.left <= 10) {
            return true;
        }
        else {
            return false;
        }
    }
}