import WhiteKey from './WhiteKey';
import a1Key from './Keys';
export default class Piano {

	//This will construct the canvas and bring in the paddle and balls
	constructor() {
		const canvas = document.getElementById('piano');
		this.width = canvas.width;
		this.height = canvas.height;
		this.context = canvas.getContext('2d');
		this.context.fillStyle = 'white';

    //Instances of ball, player 1, player 2 and their keys are created here
    this.a1 = new WhiteKey(this.height, 0, a1Key);
		this.b1 = new WhiteKey(this.height, 100, a1Key);
		this.c1 = new WhiteKey(this.height, 200, a1Key);
		this.d1 = new WhiteKey(this.height, 300, a1Key);
		this.e1 = new WhiteKey(this.height, 400, a1Key);
		this.f1 = new WhiteKey(this.height, 500, a1Key);
		this.g1 = new WhiteKey(this.height, 600, a1Key);

	}
	//This will call the drawboard, ball and players every 30 ms
	render(){
    this.a1.render(this.context);
		this.b1.render(this.context);
		this.c1.render(this.context);
		this.d1.render(this.context);
		this.e1.render(this.context);
		this.f1.render(this.context);
		this.g1.render(this.context);

	}
}
