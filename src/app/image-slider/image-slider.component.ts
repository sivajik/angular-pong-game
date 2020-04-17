import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ImageCell } from '../classes/image-slider/ImageCell';

const DUMMY: any = null;
const DUMMY_CELL_INDEX: number = -999;

const INITIAL_BOARD_SIZE: number = 4;
const SHOW: string = "show";
const HIDE: string = "hide";

const Img = new Image();

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html'
})
export class ImageSliderComponent implements OnInit {
  public logMessage: string = '';
  private parts = [];
  public imagePath: string = '';

  public eachCellWidth: number;
  public eachCellHeight: number;
  public boardDimension: number;
  public board: any[] = [];
  public totalClicks: number = 0;

  @ViewChild('myCanvas') canvasElem: ElementRef;
  @ViewChild('boardSize') boardSize: ElementRef

  constructor() {
    this.boardDimension = INITIAL_BOARD_SIZE;
    this.totalClicks = 0;
    this.parts = [];
    this.board = [];
  }

  showInfo(i: number, j: number): void {
    this.logMessage = "[" + i + ", " + j + "] -> " + this.board[i][j].show + " & " + this.board[i][j].cellIndex;
  }

  // credits: https://github.com/KyrosDigital/imgsplit/blob/master/imgsplit.html
  onChange(fileInput: any) {
    const URL = window.URL || window.webkitURL;

    const filesToUpload = (fileInput.target.files);
    Img.src = URL.createObjectURL(filesToUpload[0]);

    Img.onload = (e: any) => {
      const height = e.path[0].height;
      const width = e.path[0].width;
      this.imagePath = e.path[0];
      console.log(height + " :: " + width + " :: " + this.imagePath);
      this.boardConfigChanged();
    }
  }

  ngOnInit(): void { }

  fillBoard(): void {
    //
    let numberArray = new Array(this.boardDimension * this.boardDimension);
    for (let i = 0; i < (this.boardDimension * this.boardDimension); i++) {
      numberArray[i] = (i);
    }
    numberArray = this.shuffle(numberArray);
    console.log(numberArray);

    let count: number = 0;

    let imageCellArray: ImageCell[] = new Array(this.boardDimension * this.boardDimension);

    for (let i = 0; i < this.boardDimension; i++) {
      for (let j = 0; j < this.boardDimension; j++) {
        imageCellArray[count] = new ImageCell(i, j, '' + this.parts[count], SHOW, count);
        count++;
      }
    }
    let lastIndex = (this.boardDimension * this.boardDimension) - 1;
    imageCellArray[lastIndex].show = HIDE;
    imageCellArray[lastIndex].cellIndex = DUMMY_CELL_INDEX;

    count = 0;
    for (let i = 0; i < this.boardDimension; i++) {
      this.board[i] = new Array(this.boardDimension);
      for (let j = 0; j < this.boardDimension; j++) {
        this.board[i][j] = imageCellArray[numberArray[count++]];
      }
    }
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

  splitImageAsTiles() {
    let ctx = this.canvasElem.nativeElement.getContext('2d');
    var currImg: any = this.imagePath;

    var w2 = currImg.width / this.boardDimension;
    var h2 = currImg.height / this.boardDimension;

    this.eachCellWidth = currImg.width / this.boardDimension;
    this.eachCellHeight = currImg.height / this.boardDimension;

    var heights = new Array();
    var widths = new Array();

    var heightFactor: number = 0;
    for (var i = 0; i < (this.boardDimension * this.boardDimension); i++) {
      if (i < this.boardDimension) {
        heights[i] = 0;
      } else {
        if (i % this.boardDimension === 0) {
          heightFactor += h2;
        }
        heights[i] = -1 * heightFactor;
      }
    }

    var widthFactor = 0;
    for (var i = 0; i < (this.boardDimension * this.boardDimension); i++) {
      if (i % this.boardDimension == 0) {
        widthFactor = 0;
        widths[i] = -1 * widthFactor;
      } else {
        widthFactor += w2;
        widths[i] = -1 * widthFactor;
      }
    }


    for (var i = 0; i < (this.boardDimension * this.boardDimension); i++) {
      var x = widths[i];
      var y = heights[i];

      this.canvasElem.nativeElement.width = w2;
      this.canvasElem.nativeElement.height = h2;

      ctx.drawImage(currImg, x, y, w2 * this.boardDimension, h2 * this.boardDimension);

      if (i !== (this.boardDimension * this.boardDimension) - 1) { // 0 - 15
        this.parts.push(this.canvasElem.nativeElement.toDataURL());
      }
    }

    this.fillBoard();
  }

  onCellClick(row: number, col: number): void {
    console.log("Clicked: " + row + " , " + col);

    if (this.board[row][col].show !== HIDE) {
      let currentCellImg: any = this.board[row][col].value;
      let currentCellIndexVal: number = this.board[row][col].cellIndex;

      // is right cell empty?
      if (col + 1 < this.boardDimension && this.board[row][col + 1].show === HIDE) {
        this.board[row][col + 1].value = currentCellImg;
        this.board[row][col + 1].show = SHOW;
        this.board[row][col + 1].cellIndex = currentCellIndexVal;

        this.board[row][col].value = DUMMY;
        this.board[row][col].show = HIDE;
        this.board[row][col].cellIndex = DUMMY_CELL_INDEX;

        this.totalClicks++;
      }

      // is left cell empty?
      if (col - 1 >= 0 && this.board[row][col - 1].show === HIDE) {
        this.board[row][col - 1].value = currentCellImg;
        this.board[row][col - 1].show = SHOW;
        this.board[row][col - 1].cellIndex = currentCellIndexVal;

        this.board[row][col].value = DUMMY;
        this.board[row][col].show = HIDE;
        this.board[row][col].cellIndex = DUMMY_CELL_INDEX;
        this.totalClicks++;
      }

      // is top cell empty?
      if (row - 1 >= 0 && this.board[row - 1][col].show === HIDE) {
        this.board[row - 1][col].value = currentCellImg;
        this.board[row - 1][col].show = SHOW;
        this.board[row - 1][col].cellIndex = currentCellIndexVal;

        this.board[row][col].value = DUMMY;
        this.board[row][col].show = HIDE;
        this.board[row][col].cellIndex = DUMMY_CELL_INDEX;
        this.totalClicks++;
      }
      // is bottom cell empty?
      if (row + 1 < this.boardDimension && this.board[row + 1][col].show === HIDE) {
        this.board[row + 1][col].value = currentCellImg;
        this.board[row + 1][col].show = SHOW;
        this.board[row + 1][col].cellIndex = currentCellIndexVal;

        this.board[row][col].value = DUMMY;
        this.board[row][col].show = HIDE;
        this.board[row][col].cellIndex = DUMMY_CELL_INDEX;
        this.totalClicks++;
      }
    } else {
      alert('Invalid click');
    }

    if (this.isGameCompleted()) {
      alert('Hurray!!! You Won the Game');
    }
  }

  isGameCompleted(): boolean {
    let gameCompleted: boolean = true;
    let count: number = 0;
    console.log("Checking whether game completed or not...")
    for (let i = 0; i < this.boardDimension; i++) {
      for (let j = 0; j < this.boardDimension; j++) {

        if (i === this.boardDimension - 1 && j === this.boardDimension - 1) {
          // if you reached here means all cells so far are having correct values.
          if (this.board[i][j].cellIndex === DUMMY_CELL_INDEX) {
            return true;
          }
        } else {
          console.log('Checking the right value: ' + i + " - " + j + " - " + this.board[i][j].cellIndex);
          if (this.board[i][j].cellIndex !== (count++)) {
            return false;
          }
        }
      }
    }
    return gameCompleted;
  }

  boardConfigChanged(): void {
    this.board = [];
    this.boardDimension = this.boardSize.nativeElement.value;
    this.totalClicks = 0;
    this.parts = [];
    // this.boardDimension = INITIAL_BOARD_SIZE;
    this.splitImageAsTiles();
  }

  setSelectedImage(event: any): void {
    this.imagePath = event.srcElement.src;
    const URL = window.URL || window.webkitURL;
    Img.src = this.imagePath;

    Img.onload = (e: any) => {
      const height = e.path[0].height;
      const width = e.path[0].width;
      this.imagePath = e.path[0];

      console.log(height + " :: " + width + " :: " + this.imagePath);
      this.boardConfigChanged();
    }
  }
}