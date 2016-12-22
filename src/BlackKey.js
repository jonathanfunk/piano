let pressed = false;

export default class WhiteKey {
  constructor(boardHeight, x, key){
    this.width = 95;
    this.height = 125;
    this.boardHeight = boardHeight;
    this.x = x;
    this.y = 0
    this.color = "black";
    this.keys = key;
    console.log(this.keys.note);
    this.pressed;
    document.addEventListener('keydown',event => this.keyUp(event))
    document.addEventListener('keyup',event => this.keyDown(event))
  }

  //upPress/downPress values are true when keys are pressed down
  keyUp(event){
    switch (event.keyCode) {
      case this.keys.key:
      console.log("Hello!");
      this.keys.note.currentTime = 0;
      this.keys.note.loop = false;
      this.keys.note.play();
      this.color = "grey";
      this.pressed = true;
      break;
      default: return;
    }
  }

  //upPress/downPress values are false when keys are released
  keyDown(event){
    switch (event.keyCode) {
      case this.keys.key:
      this.pressed = false;
      this.color = "black";
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
