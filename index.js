/// <reference path="./node_modules/@types/p5/lib/addons/p5.sound.d.ts" />
/// <reference path="./node_modules/@types/p5/global.d.ts" />
/// <reference path="./node_modules/@types/p5/literals.d.ts" />
/// <reference path="./node_modules/@types/p5/constants.d.ts" />


  
  class Particle {
    /**
     * @param {number} x the X position
     * @param {number} y the Y position
     */
  
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
    display() {
      let randomBox = random(minBox, maxBox);
      noFill();
      stroke(boxhue, boxsat, boxbright);
      strokeWeight(0.3);
      rect(this.x, this.y, randomBox, randomBox);
    }
    update() {
      let randomDiraction = random(0, 40);
  
      if (keyIsPressed === true) {
        if (keyIsDown(LEFT_ARROW)) {
          this.x -= maxBox;
          this.y += 0;
        }
        if (keyIsDown(RIGHT_ARROW)) {
          this.x += maxBox;
          this.y += 0;
        }
        if (keyIsDown(UP_ARROW)) {
          this.x += 0;
          this.y -= maxBox;
        }
        if (keyIsDown(DOWN_ARROW)) {
          this.x += 0;
          this.y += maxBox;
        }
      } else {
        if (randomDiraction >= 0 && randomDiraction <= 10) {
          this.x += 0;
          this.y += maxBox;
        } else {
          if (randomDiraction > 10 && randomDiraction <= 20) {
            this.x += 0;
            this.y -= maxBox;
          } else {
            if (randomDiraction > 20 && randomDiraction <= 30) {
              this.x += maxBox;
              this.y += 0;
            } else {
              if (randomDiraction > 30 && randomDiraction <= 40) {
                this.x -= maxBox;
                this.y += 0;
              }
            }
          }
        }
      }
  
      this.x = constrain(
        this.x,
        0 + (maxBox / 2 + gappy),
        height - (maxBox / 2 + gappy)
      );
      this.y = constrain(
        this.y,
        0 + (maxBox / 2 + gappy),
        height - (maxBox / 2 + gappy)
      );
    }
  }
  
  const particles = [];
  let maxBox = 10;
  let minBox = 1;
  const gap = 35;
  const introduction = "Click anywhere on the Canvas";
  const keyexplain = "Use the arrow keys to control the particles.";
  const colorexplain = "Change the color while the particles moving";
  const saveexplain = "Press 'S' to save the Image";
  let firstpress = false;
  let gappy = 40;
  let boxhue = 0;
  let boxsat = 0;
  let boxbright = 100;
  
  function setup() {
    createCanvas(600, 600);
    background(10);
    rectMode(CENTER);
    colorMode(HSB, 100);
  
    //dosn't work for other maxBox numbers
    let innerBox = height - gap * 2;
    let spreadBox = innerBox / maxBox;
    let moreBox = spreadBox - round(spreadBox, 0);
    let overBox = maxBox * moreBox;
    gappy = overBox + gap;
    //--------------------
    console.log("testing :", innerBox, spreadBox, moreBox, overBox, gappy);
  }
  
  function draw() {
    if (firstpress == false) {
      noStroke();
  
      stroke(10);
      strokeWeight(2);
      noFill();
      rect(height / 2, height / 2, height - gappy * 2, height - gappy * 2);
    } else {
      if (firstpress == true) {
        noStroke();
        fill(10);
        rect(width / 2, height / 2, width - gappy * 2, height - gappy * 2);
        firstpress = 3;
      }
    }
    particles.forEach((p) => {
      p.display();
      p.update();
    });
    noStroke();
    fill(0, 0, 100);
    rect(width / 2 - 120, height - 17.5, 20, 20);
  
    fill(0, 100, 100);
    rect(width / 2 - 80, height - 17.5, 20, 20);
  
    fill(16, 100, 100);
    rect(width / 2 - 40, height - 17.5, 20, 20);
  
    fill(33, 100, 100);
    rect(width / 2, height - 17.5, 20, 20);
  
    fill(50, 100, 100);
    rect(width / 2 + 40, height - 17.5, 20, 20);
  
    fill(66, 100, 100);
    rect(width / 2 + 80, height - 17.5, 20, 20);
  
    stroke(255);
    fill(0, 100, 0);
    rect(width / 2 + 120, height - 17.5, 20, 20);
  }
  
  function mousePressed() {
    let roundmouseX = round(mouseX / 10) * 10;
    let roundmouseY = round(mouseY / 10) * 10;
  
    if (
      mouseX > 0 + (gappy + maxBox / 2) &&
      mouseX < height - (gappy + maxBox / 2) &&
      mouseY > 0 + (gappy + maxBox / 2) &&
      mouseY < height - (gappy + maxBox / 2)
    ) {
      if (firstpress == false) {
        firstpress = true;
      }
      particles.push(new Particle(roundmouseX, roundmouseY));
    }
    const leftcoordsX = width / 2 - 10;
    const uppercoordsY = height - 17.5 - 10;
    const rightcoordsX = width / 2 + 10;
    const lowercoordsY = height - 17.5 + 10;
  
    if (
      mouseX >= leftcoordsX - 120 &&
      mouseX <= rightcoordsX - 120 &&
      mouseY >= uppercoordsY + 0 &&
      mouseY <= lowercoordsY + 0
    ) {
      boxhue = 0;
      boxsat = 0;
      boxbright = 100;
    }
    if (
      mouseX >= leftcoordsX - 80 &&
      mouseX <= rightcoordsX - 80 &&
      mouseY >= uppercoordsY + 0 &&
      mouseY <= lowercoordsY + 0
    ) {
      boxhue = 0;
      boxsat = 100;
      boxbright = 100;
    }
    if (
      mouseX >= leftcoordsX - 40 &&
      mouseX <= rightcoordsX - 40 &&
      mouseY >= uppercoordsY + 0 &&
      mouseY <= lowercoordsY + 0
    ) {
      boxhue = 16;
      boxsat = 100;
      boxbright = 100;
    }
    if (
      mouseX >= leftcoordsX + 0 &&
      mouseX <= rightcoordsX + 0 &&
      mouseY >= uppercoordsY + 0 &&
      mouseY <= lowercoordsY + 0
    ) {
      boxhue = 33;
      boxsat = 100;
      boxbright = 100;
    }
    if (
      mouseX >= leftcoordsX + 40 &&
      mouseX <= rightcoordsX + 40 &&
      mouseY >= uppercoordsY + 0 &&
      mouseY <= lowercoordsY + 0
    ) {
      boxhue = 50;
      boxsat = 100;
      boxbright = 100;
    }
    if (
      mouseX >= leftcoordsX + 80 &&
      mouseX <= rightcoordsX + 80 &&
      mouseY >= uppercoordsY + 0 &&
      mouseY <= lowercoordsY + 0
    ) {
      boxhue = 66;
      boxsat = 100;
      boxbright = 100;
    }
    if (
      mouseX >= leftcoordsX + 120 &&
      mouseX <= rightcoordsX + 120 &&
      mouseY >= uppercoordsY + 0 &&
      mouseY <= lowercoordsY + 0
    ) {
      boxhue = 0;
      boxsat = 0;
      boxbright = 0;
    }
  }
  
  let arrowpressed = false;
  
  function keyTyped() {
    if (key === "s") {
      saveCanvas("outfile-" + Date.now, "png");
    }
  }
  