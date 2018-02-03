var p1Button = document.querySelector("#p1Button");
var p2Button = document.getElementById("p2Button");
var resetButton = document.querySelector("#resetButton");

var p1 = 0;
var p2 = 0;

var p1Score = document.querySelector("#p1Score");
var p2Score = document.getElementById("p2Score");

var gameOver = false;

var winScore = 5;

var input = document.querySelector("input");
var winSpan = document.querySelector("#winningValue");

function reset()
{
	gameOver = false;
	p1 = 0;
	p2 = 0;

	p1Score.classList.remove("winner");
	p2Score.classList.remove("winner");

	p1Score.textContent = p1;
	p2Score.textContent = p2;
}



input.addEventListener("change", function(){
	winSpan.textContent = input.value;
	winScore = Number(input.value);

	reset();
});

resetButton.addEventListener("click", function(){
	reset();
});

p1Button.addEventListener("click", function(){

	if (!gameOver)
	{
		p1++;

		if (p1 === winScore)
		{
			p1Score.classList.add("winner");
			gameOver = true;
		}
	}

	p1Score.textContent = p1;
});

p2Button.addEventListener("click", function(){

	if (!gameOver)
	{
		p2++;

		if (p2 === winScore)
		{
			p2Score.classList.add("winner");
			gameOver = true;
		}
	}
	p2Score.textContent = p2;
});