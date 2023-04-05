const WIDTH = 400;
const HEIGHT = 600;

const FRAME_WIDTH = 4;
const LABEL_HEIGHT = 100;
const COLUMN_WIDTH = 30;
const COLUMN_HEIGHT = 400;

function setup() {
  createCanvas(WIDTH, HEIGHT);
}

function draw() {
	strokeWeight(FRAME_WIDTH);
	stroke(200);
	rect(FRAME_WIDTH / 2, FRAME_WIDTH / 2, WIDTH - FRAME_WIDTH, HEIGHT - FRAME_WIDTH);

	line(10, HEIGHT - LABEL_HEIGHT, WIDTH - 10, HEIGHT - LABEL_HEIGHT);

	push();
	noStroke();
	textAlign(CENTER, CENTER);
	textSize(30);
	fill(100);
	text('H', 100, HEIGHT - LABEL_HEIGHT / 2);
	text('M', 200, HEIGHT - LABEL_HEIGHT / 2);
	text('S', 300, HEIGHT - LABEL_HEIGHT / 2);
	pop();

	const now = new Date();
	const hour = now.getHours();
	const minute = now.getMinutes();
	const second = now.getSeconds();

	console.log(hour, minute, second);

	drawTimeColumn(100, 30, hour / 24, color(158, 206, 98));
	drawTimeColumn(200, 15, minute / 60, color(93, 202, 210));
	drawTimeColumn(300, 8, second / 60, color(242, 199, 71));
}

function drawColumn(x, y, w, h, percent, color, borderWidth = 2) {
	push();
	strokeWeight(borderWidth);
	stroke(200);

	const timeLeft = 1 - percent;

	translate(x - w / 2, y);
	rect(-borderWidth / 2, -borderWidth / 2, w + borderWidth, h + borderWidth);
	noStroke();
	fill(color);
	// height from bottom
	rect(0, h - h * timeLeft, w, h * timeLeft);

	pop();
}

function drawTimeColumn(x, width, percent, color) {
	drawColumn(x, (HEIGHT - LABEL_HEIGHT - COLUMN_HEIGHT) / 2, width, COLUMN_HEIGHT, percent, color);
}
