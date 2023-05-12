let walls = [];
let particle;

const sceneW = 400;
const sceneH = 400;

function setup() {
    createCanvas(800, 400);
    for (let i = 0; i < 6; i++) {
        let x1 = random(width / 2);
        let x2 = random(width / 2);
        let y1 = random(height);
        let y2 = random(height);
        walls[i] = new Boundary(x1, y1, x2, y2);

    }
    walls.push(new Boundary(0, 0, 0, height));
    walls.push(new Boundary(0, 0, width / 2, 0));
    walls.push(new Boundary(width / 2, 0, width / 2, height));
    walls.push(new Boundary(0, height, width / 2, height));
    particle = new Particle;
}

function draw() {



    background(0);
    for (let wall of walls) {
        wall.show();
    }
    particle.update(mouseX, mouseY);
    particle.show();
    const scene = particle.look(walls);
    const w = sceneW / scene.length;
    push();
    translate(sceneW, 0);
    for (let i = 0; i < scene.length; i++) {
        noStroke();
        const sq = scene[i] * scene[i];
        const wsq = sceneW * sceneW;
        const b = map(sq, 0, wsq, 180, 0);
        const h = map(scene[i], 0, sceneW, sceneH, 0);
        fill(b);
        rectMode(CENTER);
        rect(i * w + w / 2, sceneH / 2, w + 1, h);
    }
    pop();
    if (keyIsDown(LEFT_ARROW)) {
        particle.rotate(0.1);
        // console.log(1);
    } else if (keyIsDown(RIGHT_ARROW)) {
        particle.rotate(-0.1);
        // console.log(2);
    }
    // ray.show();
    // ray.lookAt(mouseX, mouseY);
    // let pt = ray.cast(wall);
    // if (pt) {
    //     fill(255);
    //     ellipse(pt.x, pt.y, 8, 8);
    // }
}