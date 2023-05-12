let walls = [];
let particle;

function setup() {
    createCanvas(800, 800);
    for (let i = 0; i < 6; i++) {
        let x1 = random(width);
        let x2 = random(width);
        let y1 = random(height);
        let y2 = random(height);
        walls[i] = new Boundary(x1, y1, x2, y2);

    }
    walls.push(new Boundary(0, 0, 0, height));
    walls.push(new Boundary(0, 0, width, 0));
    walls.push(new Boundary(width, 0, width, height));
    walls.push(new Boundary(0, height, width, height));
    particle = new Particle;
}

function draw() {
    background(0);
    for (let wall of walls) {
        wall.show();
    }
    particle.update(mouseX, mouseY);
    particle.show();

    particle.look(walls);


    // ray.show();
    // ray.lookAt(mouseX, mouseY);
    // let pt = ray.cast(wall);
    // if (pt) {
    //     fill(255);
    //     ellipse(pt.x, pt.y, 8, 8);
    // }
}
