let particles = [];
let numberOfParticles = 0;

function setup() {
    createCanvas(windowWidth,windowHeight);
    noStroke();
    textAlign(CENTER, CENTER);
}

function windowResized() {
    resizeCanvas(windowWidth,windowHeight);
}

function draw() {
    fill(0,0,0, 15);
    rect(0,0,width,height);

    if (random(0,1) < 0.2 && numberOfParticles < 100) {
        particles.push(new Particle(random(0,width),0));
        numberOfParticles++;
        console.log(numberOfParticles);
    }

    for (let p of particles) {
        p.draw();
        p.y+=20;
    }
}

class Particle {
    constructor(x, y, s) {
        this.x = x;
        this.y = y;
    }

    draw() {
        if (this.y > height) {
            this.y = 0;
        }
        fill(255,255,0);
        textSize(20);
        text(random() < 0.5 ? '0' : '1', this.x, this.y);
    }
}