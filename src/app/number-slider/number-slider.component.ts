import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Cell } from '../classes/number-slider/cell';

const DUMMY: string = ' ';
const INITIAL_BOARD_SIZE: number = 4;

@Component({
  selector: 'app-number-slider',
  templateUrl: './number-slider.component.html'
})
export class NumberSliderComponent implements OnInit {


  public board: any[] = [];
  public boardDimension: number;
  public totalClicks: number = 0;

  @ViewChild('boardSize') boardSize: ElementRef

  constructor() {
    this.boardDimension = INITIAL_BOARD_SIZE;
    this.fillBoard();
  }

  ngOnInit(): void {
  }

  fillBoard(): void {
    let numberArray = new Array((this.boardDimension * this.boardDimension) - 1)
    for (let i = 0; i < (this.boardDimension * this.boardDimension) - 1; i++) {
      numberArray[i] = (i + 1);
    }
    numberArray = this.shuffle(numberArray);

    let count: number = 0;

    for (let i = 0; i < this.boardDimension; i++) {
      this.board[i] = new Array(this.boardDimension);
      for (let j = 0; j < this.boardDimension; j++) {
        this.board[i][j] = new Cell(i, j, '' + numberArray[count++], true);
      }
    }
    this.board[this.boardDimension - 1][this.boardDimension - 1].show = false;
    this.board[this.boardDimension - 1][this.boardDimension - 1].value = DUMMY;
  }

  // credit : http://stackoverflow.com/questions/962802#962890
  shuffle(array) {
    var tmp, current, top = array.length;
    if (top) {
      while (--top) {
        current = Math.floor(Math.random() * (top + 1));
        tmp = array[current];
        array[current] = array[top];
        array[top] = tmp;
      }
    }
    return array;
  }

  onCellClick(row: number, col: number): void {
    if (this.board[row][col].value != DUMMY) {
      let currentCellValue: number = this.board[row][col].value;

      // is right cell empty?
      if (col + 1 < this.boardDimension && this.board[row][col + 1].value === DUMMY) {
        this.board[row][col + 1].value = currentCellValue;
        this.board[row][col + 1].show = true;
        this.board[row][col].value = DUMMY;
        this.board[row][col].show = false;
        this.totalClicks++;
      }

      // is left cell empty?
      if (col - 1 >= 0 && this.board[row][col - 1].value === DUMMY) {
        this.board[row][col - 1].value = currentCellValue;
        this.board[row][col - 1].show = true;
        this.board[row][col].value = DUMMY;
        this.board[row][col].show = false;
        this.totalClicks++;
      }

      // is top cell empty?
      if (row - 1 >= 0 && this.board[row - 1][col].value === DUMMY) {
        this.board[row - 1][col].value = currentCellValue;
        this.board[row - 1][col].show = true;
        this.board[row][col].value = DUMMY;
        this.board[row][col].show = false;
        this.totalClicks++;
      }
      // is bottom cell empty?
      if (row + 1 < this.boardDimension && this.board[row + 1][col].value === DUMMY) {
        this.board[row + 1][col].value = currentCellValue;
        this.board[row + 1][col].show = true;
        this.board[row][col].value = DUMMY;
        this.board[row][col].show = false;
        this.totalClicks++;
      }
    } else {
      alert('Invalid click');
    }

    if (this.isGameCompleted()) {
      alert('Hurray!!! You Won the Game');
    }
  }

  hideCell(i: number, j: number) {
    return this.board[i][j].value !== DUMMY;
  }

  isGameCompleted(): boolean {
    let gameCompleted: boolean = true;
    let count: number = 1;
    for (let i = 0; i < this.boardDimension; i++) {
      for (let j = 0; j < this.boardDimension; j++) {

        if (i === this.boardDimension - 1 && j === this.boardDimension - 1) {
          // if you reached here means all cells so far are having correct values.
          if (this.board[i][j].value === DUMMY) {
            return true;
          }
        } else {
          // let num = (count++);
          console.log(i + " - " + j + " - " + this.board[i][j].value);
          if (this.board[i][j].value !== '' + (count++)) {
            return false;
          }
        }
      }
    }
    return gameCompleted;
  }

  boardSizeChanged(): void {
    console.log(this.boardSize.nativeElement.value);
    this.board = [];
    this.boardDimension = this.boardSize.nativeElement.value;
    this.totalClicks = 0;

    this.fillBoard();
  }

}
