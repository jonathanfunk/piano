let upPressed = false;
let downPressed = false;

export default class WhiteKey {
  constructor(boardHeight, x, keys){
    this.width = 95;
    this.height = 250;
    this.boardHeight = boardHeight;
    this.x = x;
    this.y = 0
    this.color = "white";
    this.keys = keys;
    this.upPressed;
    this.downPressed;
    document.addEventListener('keydown',event => this.keyUp(event))
    document.addEventListener('keyup',event => this.keyDown(event))
  }

  //upPress/downPress values are true when keys are pressed down
  keyUp(event){
    switch (event.keyCode) {
      case this.keys.up:
      this.upPressed = true;
      break;
      case this.keys.down:
      this.downPressed = true;
      break;
      default: return;
    }
  }

  //upPress/downPress values are false when keys are released
  keyDown(event){
    switch (event.keyCode) {
      case this.keys.up:
      this.upPressed = false;
      break;
      case this.keys.down:
      this.downPressed = false;
      break;
      default: return;
    }
  }

  //This is to give the paddle it's shape using the above constructor values.
  render(context){
    context.fillStyle = this.color;
    context.fillRect(
      this.x,
      this.y,
      this.width,
      this.height
    );
  }

}
