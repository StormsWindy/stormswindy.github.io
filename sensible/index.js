const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

function draw() {
    ctx.beginPath();
    ctx.rect(20, 40, 50, 50);
    ctx.fillStyle = "#FF0000";
    ctx.fill();
    ctx.closePath();
}

function start() {
	setInterval(draw, 10);
	console.log("i");
}

document.getElementById("runButton").addEventListener("click", function() {
	start();
	console.log("r");
	this.disabled = true;
});

