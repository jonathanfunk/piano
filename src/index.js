import './piano.css';
import Piano from './Piano'

var piano = new Piano();

const ms = 30;
// Game should start immediately.
(function pianoLoop() {
	piano.render();
	setTimeout(pianoLoop, ms);
}());
