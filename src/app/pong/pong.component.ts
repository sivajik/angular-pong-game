import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { PongGame } from '../classes/PongGame';
import { Boundaries } from '../classes/Boundaries';
import { KeysPressedState } from '../classes/KeysPressedState';

const ADULT_BAT_HEIGHT: number = 125;
const KIDS_BAT_HEIGHT: number = 325;
const CANVAS_WIDTH: number = 900;
const CANVAS_HEIGHT: number = 600;
const UP_KEY: number = 38;
const DOWN_KEY: number = 40;

@Component({
  selector: 'app-pong',
  templateUrl: './pong.component.html'
})
export class PongComponent implements OnInit {

  public width: number;
  public height: number;

  public t: number; // top
  public b: number; // bottom
  public l: number; // left
  public r: number; // right

  @ViewChild('canvasElem') canvas: ElementRef;

  /**
   * The CanvasRenderingContext2D interface, part of the Canvas API, provides the 2D
   * rendering context for the drawing surface of a <canvas> element. It is used for drawing 
   * shapes, text, images, and other objects.
   */
  private renderingContext: CanvasRenderingContext2D;

  private keyPressedState: KeysPressedState;

  private pongGame: PongGame;

  public gameCompleted: boolean;

  constructor() {
    this.width = CANVAS_WIDTH;
    this.height = CANVAS_HEIGHT;
    this.keyPressedState = { upKeyPressed: false, downKeyPressed: false };
    this.pongGame = new PongGame(this.width, this.height);
    this.gameCompleted = false;
  }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    this.renderingContext = this.canvas.nativeElement.getContext('2d');
    this.displayCanvas();

    // refresh this for every 1 milli sec
    setInterval(() => {
      const x = this.pongGame.progress(this.keyPressedState);
      this.t = x.top;
      this.b = x.bottom;
      this.l = x.left;
      this.r = x.right;
    }, 1);
  }

  public restartGame(): void {
    this.gameCompleted = false;
    location.reload();
  }

  private displayCanvas(): void {
    if (this.pongGame.gameCompleted()) {
      this.renderingContext.font = "30px Arial";
      this.renderingContext.fillText("Game Over!", 50, 50);
      this.gameCompleted = true;
      return;
    }

    this.renderingContext.fillStyle = 'black';
    this.renderingContext.fillRect(0, 0, this.width, this.height);

    let bounds: Boundaries;

    // Draw bat
    this.renderingContext.fillStyle = 'red';
    let batObj = this.pongGame.bat;
    bounds = batObj.getCollisionBoundaries();
    this.renderingContext.fillRect(bounds.left, bounds.top, batObj.getWidth(), batObj.getHeight());

    // Draw ball
    this.renderingContext.fillStyle = 'yellow';
    let ballObj = this.pongGame.ball;
    bounds = ballObj.getCollisionBoundaries();
    this.renderingContext.fillRect(bounds.left, bounds.top, ballObj.getWidth(), ballObj.getHeight());

    // Render next frame
    window.requestAnimationFrame(() => this.displayCanvas());
  }

  @HostListener('window:keydown', ['$event'])
  keyLeft(event: KeyboardEvent) {
    if (event.keyCode == UP_KEY) {
      this.keyPressedState.upKeyPressed = true;
    }
    if (event.keyCode == DOWN_KEY) {
      this.keyPressedState.downKeyPressed = true;
    }
  }

  @HostListener('window:keyup', ['$event'])
  keyRight(event: KeyboardEvent) {
    if (event.keyCode == UP_KEY) {
      this.keyPressedState.upKeyPressed = false;
    }
    if (event.keyCode == DOWN_KEY) {
      this.keyPressedState.downKeyPressed = false;
    }
  }

  playerChanged(event: any): void {
    const player = event.target.value;
    if (player === 'jodha') {
      this.pongGame.bat.setHeight(KIDS_BAT_HEIGHT);
    } else if (player === 'daddy') {
      this.pongGame.bat.setHeight(ADULT_BAT_HEIGHT);
    }
  }
}
