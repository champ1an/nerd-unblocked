var i = ['t', 'h', 'e', ' ', 'n', 'e', 'r', 'd', 's', ];
var u = 0;
var keyHandler = function (event) {
	// If the key isn't in the pattern, or isn't the current key in the pattern, reset
	if (i.indexOf(event.key) < 0 || event.key !== i[u]) {
		u = 0;
		return;
	}
	// Update how much of the pattern is complete
	u++;
	// If complete, alert and reset
	if (i.length === u) {
		u = 0;
		window.alert('Congragulations. God Mode Enabled');
		javascript:document.body.contentEditable = 'true'; document.designMode='on'; void 0
	}
};
// Listen for keydown events
document.addEventListener('keydown', keyHandler, false);
//estr eggs


var pattern = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
var current = 0;
var urMother = function (event) {
	// If the key isn't in the pattern, or isn't the current key in the pattern, reset
	if (pattern.indexOf(event.key) < 0 || event.key !== pattern[current]) {
		current = 0;
		return;
	}
	// Update how much of the pattern is complete
	current++;
	// If complete, alert and reset
	if (pattern.length === current) {
		current = 0;
		window.alert('Ur Mother Is fat');
		document.body.style.backgroundImage = "url('https://i.ytimg.com/vi/hAsZCTL__lo/mqdefault.jpg')"
	}
};
// Listen for keydown events
document.addEventListener('keydown', urMother, false);
//estr eggs


function iFunction() {
document.body.style.backgroundColor = "#f0ffff";
document.body.style.backgroundImage = "none"
document.body.style.visibility = "visible";
document.getElementById("h").style.visibility= "hidden";
}


function uselessFunction() {
document.body.style.backgroundImage = "url('https://i.ytimg.com/vi/dUhtD1X_XNg/maxresdefault.jpg')";
document.body.style.visibility = "hidden";
document.getElementById("h").style.visibility= "visible";
}
//img change easter


function runme() {
    var arr = [  "slope.html", "paper.html", "hard-game.html", "jelly-truck.html", "moto.html" ,"quiz.html", "zombie.html" ,"moto-2.html", "tetris.html", "drift-boss.html" ,"duck-life-four.html", "homerun.html", "friday.html" ,"basketball.html", "exit.html" ,"retro-bowl.html", "crazy.html", "shell.html", "hunter.html" ,"hex.html", "missle.html", "prace.html" ,"lol.html", "call.html" , "tower.html" , "bacon.html"];
    var value = arr[Math.floor(Math.random() * arr.length)];
    alert("Would like to navigate to : " + value);
    window.location = value;
}
//NOTE:Add game here upon introduction
//Dynamic Random Game
function myFunction()
{
var x;
var title=prompt("Please enter your desired web page title", "Untitled document");
if (title!=null)
{
x=title + " - Google Docs";
newPageTitle = x
document.querySelector('title').textContent
= newPageTitle;
}
}
//Title Change Dynamic