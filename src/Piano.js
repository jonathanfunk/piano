import {p1Keys, p2Keys, Start} from './Keys';
export default class Piano {

	//This will construct the canvas and bring in the paddle and balls
	constructor() {
		const canvas = document.getElementById('piano');
		this.width = canvas.width;
		this.height = canvas.height;
		this.context = canvas.getContext('2d');
		this.context.fillStyle = 'grey';

    //Instances of ball, player 1, player 2 and their keys are created here
    this.p1 = new Paddle(this.height, 10, 'white', p1Keys);
    this.p2 = new Paddle(this.height, this.width - 4 - 10, 'white', p2Keys);
	}

	//This will call the drawboard, ball and players every 30 ms
	render(){
		this.drawBoard();
    this.ball.render(this.context, this.p1, this.p2, this.p1Score, this.p2Score);
	}
}
