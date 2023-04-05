const WIDTH = 600;
const HEIGHT = 600;

const CLOCK_RADIUS = 200;
const HOUR_CIRCLE_RADIUS = 150;
const MINUTE_DOT_RADIUS = 20;
const SECOND_DOT_RADIUS = 10;

function setup() {
  createCanvas(WIDTH, HEIGHT);
}

function draw() {
	background(255);
	translate(WIDTH / 2, HEIGHT / 2);
	strokeWeight(4);
	stroke(100);
	circle(0, 0, CLOCK_RADIUS * 2);

	noStroke();
	fill(200);
	circle(0, 0, HOUR_CIRCLE_RADIUS * 2);

	const now = new Date();
	// get current hours includes decimal
	const hour = now.getHours() + now.getMinutes() / 60;
	// get current minutes includes decimal
	const minute = now.getMinutes() + now.getSeconds() / 60;
	const second = now.getSeconds();

	fill(255);

	push();
	rotate(hour / 12 * TWO_PI);
	triangle(0, 0, -10, -HOUR_CIRCLE_RADIUS, 10, -HOUR_CIRCLE_RADIUS);
	pop();

	noFill();
	strokeWeight(2);
	stroke(100);

	push();
	rotate(minute / 60 * TWO_PI);
	circle(0, MINUTE_DOT_RADIUS - CLOCK_RADIUS + (4+2)/2, MINUTE_DOT_RADIUS * 2);
	pop();

	push();
	rotate(second / 60 * TWO_PI);
	circle(0, -SECOND_DOT_RADIUS - CLOCK_RADIUS - (4+2)/2, SECOND_DOT_RADIUS * 2);
	pop();
}

