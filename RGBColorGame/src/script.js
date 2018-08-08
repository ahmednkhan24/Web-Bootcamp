//***************************************************
//******************** FUNCTIONS ********************
// called when the user has won the game.
// changes all the square's colors to the
// winning color
function changeSquareColors(color)
{
	for (var i = 0; i < squares.length; i++)
	{
		squares[i].style.backgroundColor = color;
	}
}

// Math.random() gives a random number 0-1

// called when wanting to pick a random color from
// the color array. Returns the color
function pickaColor()
{
	var randNum = Math.floor(Math.random() * colors.length);
	return colors[randNum];
}

// returns a string denoting a random color in RGB format
function getARandomColor()
{
	// pick a number from 0-255, three times

	var num1 = Math.floor(Math.random() * 256);
	var num2 = Math.floor(Math.random() * 256);
	var num3 = Math.floor(Math.random() * 256);

	var color = "rgb(" + num1 + ", " + num2 + ", " + num3 + ")";

	return color;
}

// fills an array with 'numColors' amount of random colors
function generateRandColors(numColors)
{
	var arr = [];

	// add 'numColors' colors to arr
	for (var i = 0; i < numColors; i++)
	{
		arr.push(getARandomColor());
	}

	return arr;
}

//***************************************************
//*********** SELECTING DATA FROM THE HTML ***********
var pickedColorSpan = document.getElementById("pickedColorSpan");
var correctMsgSpan = document.querySelector("#correctMsgSpan");
// select the 6 div squares
var squares = document.querySelectorAll(".square");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#resetButton");
var easyButton = document.querySelector("#easyButton");
var hardButton = document.getElementById("hardButton");
//***************************************************

var numSquares = 6;

// array of the 6 colors for the squares
var colors = generateRandColors(numSquares);

// select the color the user will search for
var pickedColor = pickaColor();

// change the label that displays the RGB numbers for the chosen color
pickedColorSpan.textContent = pickedColor;


resetButton.addEventListener("click", function(){
	// generate new random colors
	colors = generateRandColors(numSquares);
	pickedColor = pickaColor();
	pickedColorSpan.textContent = pickedColor;

	// change the square colors
	for (var i = 0; i < squares.length; i++)
	{
		// add initial colors to squares
		squares[i].style.backgroundColor = colors[i];
	}

	h1.style.backgroundColor = "steelblue";
	resetButton.textContent = "New Colors";
	correctMsgSpan.textContent = "";
});

easyButton.addEventListener("click", function(){
	this.classList.add("selectedMode");
	hardButton.classList.remove("selectedMode");

	numSquares = 3;
	colors = generateRandColors(numSquares);
	pickedColor = pickaColor();
	pickedColorSpan.textContent = pickedColor;

	for (var i = 0; i < squares.length; i++)
	{
		if (colors[i])
		{
			squares[i].style.backgroundColor = colors[i];
		}
		else
		{
			squares[i].style.display = "none";
		}
	}
});

hardButton.addEventListener("click", function(){
	this.classList.add("selectedMode");
	easyButton.classList.remove("selectedMode");

	numSquares = 6;
	colors = generateRandColors(numSquares);
	pickedColor = pickaColor();
	pickedColorSpan.textContent = pickedColor;

	for (var i = 0; i < squares.length; i++)
	{
		
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display = "block";
	}
});

// change the square colors
for (var i = 0; i < squares.length; i++)
{
	// add initial colors to squares
	squares[i].style.backgroundColor = colors[i];

	// add click listeners to squares
	squares[i].addEventListener("click", function(){
		var clickedColor = this.style.backgroundColor;
		
		if (clickedColor === pickedColor)
		{
			//alert("Correct");
			correctMsgSpan.textContent = "Correct!";
			changeSquareColors(clickedColor);
			h1.style.backgroundColor = clickedColor;
			resetButton.textContent = "Play Again?";
		}
		else
		{
			this.style.backgroundColor = "#232323";
			correctMsgSpan.textContent = "Try Again";
		}
	});
}