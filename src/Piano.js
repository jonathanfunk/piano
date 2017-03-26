import WhiteKey from './WhiteKey';
import BlackKey from './BlackKey';
import { notes } from './Notes';
export default class Piano {

	//This will construct the canvas and bring in the paddle and balls
	constructor() {
		const canvas = document.getElementById('piano');
		this.width = canvas.width;
		this.height = canvas.height;
		this.context = canvas.getContext('2d');
		this.context.fillStyle = 'white';

		//Instances of white keys
		this.a1 = new WhiteKey(this.height, 0, notes.a1Key);
		this.b1 = new WhiteKey(this.height, 100, notes.b1Key);
		this.c1 = new WhiteKey(this.height, 200, notes.c1Key);
		this.c2 = new WhiteKey(this.height, 300, notes.c2Key);
		this.d1 = new WhiteKey(this.height, 400, notes.d1Key);
		this.e1 = new WhiteKey(this.height, 500, notes.e1Key);
		this.f1 = new WhiteKey(this.height, 600, notes.f1Key);
		this.g1 = new WhiteKey(this.height, 700, notes.g1Key);

		//Instances of black keys
		this.a1s = new BlackKey(this.height, 50, notes.a1sKey);
		this.c1s = new BlackKey(this.height, 150, notes.c1sKey);
		this.d1s = new BlackKey(this.height, 350, notes.d1sKey);
		this.f1s = new BlackKey(this.height, 450, notes.f1sKey);
		this.g1s = new BlackKey(this.height, 550, notes.g1sKey);

	}
	//This will call the drawboard every 30 ms
	render() {
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
