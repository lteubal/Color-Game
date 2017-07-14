var colors = generateRandomColors(6);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
var numSquares = 6;

easyBtn.addEventListener("click", function(){
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	numSquares = 3;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	h1.style.backgroundColor = "steelblue";
	//change colors of squares
	for(var i=0 ; i<squares.length; i++) {
		if(colors[i]) {
			squares[i].style.backgroundColor = colors[i];
		}
		else
		{
				squares[i].style.display = "none";
		}
	}	
})

hardBtn.addEventListener("click", function(){
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	numSquares = 6;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	h1.style.backgroundColor = "steelblue";
	messageDisplay.textContent ="";
	//change colors of squares
	for(var i=0 ; i<squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display = "block";
		
	}	
})

resetButton.addEventListener("click", function() {
	//generate all new colors
	colors = generateRandomColors(numSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	//change color display to match picked color
	colorDisplay.textContent = pickedColor;
	messageDisplay.textContent ="";
	h1.style.backgroundColor = "steelblue";
	messageDisplay.textContent ="";
	this.textContent = "New Colors";
	
	//change colors of squares
	for(var i=0 ; i<squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
	}
})
colorDisplay.textContent = pickedColor;

for(var i=0 ; i<squares.length; i++) {
	// add initial colors to squares
	squares[i].style.backgroundColor = colors[i];

	// add click listeners to squares
	squares[i].addEventListener("click", function(){
		// grab color of clicked square
		var clickedColor = this.style.backgroundColor; 
		// compare to color of pickedColor
		if(clickedColor === pickedColor) {
			messageDisplay.textContent = "Correct!";
			changeColors(clickedColor);
			h1.style.backgroundColor = clickedColor;
			resetButton.textContent = "Play Again?"
		}
		else
		{
			messageDisplay.textContent = "Try Again";
			this.style.backgroundColor = "#232323";
		}
	})
}

function changeColors (color){
	//loop through all squares
	for(var i=0 ; i<squares.length; i++) {		
	//Change each color to match the given color
		squares[i].style.backgroundColor = color;
	}
}
function pickColor() {

	var random = Math.floor(Math.random() * colors.length );

	return colors[random];
}
function generateRandomColors(colorsNumber) {
	var arreglo = []; 
	for(var i=0; i<colorsNumber;i++) {
		arreglo.push(randomColor())
	}
	return arreglo;
}
function randomColor() {
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	var result = "rgb("+r+", "+g+", "+b+")";
	return result
}