import WhiteKey from './WhiteKey';
import BlackKey from './BlackKey';
import a1Key from './Keys';
export default class Piano {

	//This will construct the canvas and bring in the paddle and balls
	constructor() {
		const canvas = document.getElementById('piano');
		this.width = canvas.width;
		this.height = canvas.height;
		this.context = canvas.getContext('2d');
		this.context.fillStyle = 'white';

    //Instances of white keys
    this.a1 = new WhiteKey(this.height, 0, a1Key);
		this.b1 = new WhiteKey(this.height, 100, a1Key);
		this.c1 = new WhiteKey(this.height, 200, a1Key);
		this.c2 = new WhiteKey(this.height, 300, a1Key);
		this.d1 = new WhiteKey(this.height, 400, a1Key);
		this.e1 = new WhiteKey(this.height, 500, a1Key);
		this.f1 = new WhiteKey(this.height, 600, a1Key);
		this.g1 = new WhiteKey(this.height, 700, a1Key);

		//Instances of black keys
		this.a1s = new BlackKey(this.height, 50, a1Key);
		this.c1s = new BlackKey(this.height, 150, a1Key);
		this.d1s = new BlackKey(this.height, 350, a1Key);
		this.f1s = new BlackKey(this.height, 450, a1Key);
		this.g1s = new BlackKey(this.height, 550, a1Key);

	}
	//This will call the drawboard, ball and players every 30 ms
	render(){
    this.a1.render(this.context);
		this.b1.render(this.context);
		this.c1.render(this.context);
		this.c2.render(this.context);
		this.d1.render(this.context);
		this.e1.render(this.context);
		this.f1.render(this.context);
		this.g1.render(this.context);
		this.a1s.render(this.context);
		this.c1s.render(this.context);
		this.d1s.render(this.context);
		this.f1s.render(this.context);
		this.g1s.render(this.context);

	}
}
