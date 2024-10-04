const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
let x = 16;
let y = 12;
const pixel_size = 25;

document.addEventListener("mousemove", mouseMoveHandler, false);

function mouseMoveHandler(e) {
	var relativeX = e.clientX - canvas.offsetLeft;
	var relativeY = e.clientY - canvas.offsetTop;
        if(relativeX > 0 && relativeX < canvas.width && relativeY > 0 && relativeY < canvas.height) {
           	x = Math.floor(relativeX/pixel_size);
		y = Math.floor(relativeY/pixel_size);
        }
}

function draw_pixel(posX, posY, size, fillStyle) {
	ctx.beginPath();
	ctx.rect(posX, posY, size, size);
	ctx.fillStyle = fillStyle;
	ctx.fill()
	ctx.closePath();
}
function draw_pixels() {
	for(let i = 0; i < (canvas.height / pixel_size); i++) {
		for(let j = 0; j < (canvas.width / pixel_size); j++) {
			let fun = `rgb(${Math.floor(255 - 42.5 * i)}
				${Math.floor(255 - 42.5 * j)} 0)`
			if(i == y && j == x) {
				draw_pixel(j*pixel_size, i*pixel_size, pixel_size, "rgb(255 255 0");
			}
			else {
				draw_pixel(j*pixel_size, i*pixel_size, pixel_size, fun);	

			}
		}
	}
}

function draw() {
	ctx.clearRect(0,0,canvas.width, canvas.height);
	draw_pixels();
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

