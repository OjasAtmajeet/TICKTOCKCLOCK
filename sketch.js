var hr, mn, sec, alpha;


function setup() {
    createCanvas(displayWidth, displayHeight - 101);
    
}

function draw() {
    background("chartreuse");
    circleClock();
    lineClock();
    arcClock();
    mainClock();
    
    

    
    drawSprites();
    hr = hour();
    mn = minute();
    sec = second();
    angleMode(DEGREES);
    console.log(sec);
    
}
function circleClock() {
    stroke("black");
    strokeWeight("12");
    let d = map(sec * 3, 0, width, sec * 3, sec * 3);
    fill("orange");
    ellipse(1250, 600, (180) - d, (180) - d);
    let f = map(mn * 3, 0, width, mn * 3, mn * 3);
    fill("crimson");
    ellipse(1150, 600, (180) - f, (180) - f);
    let h = map(hr * 6, 0, width, hr * 6, hr * 6);
    fill("yellow");
    ellipse(1200, 600, (144) - h, (144) - h);
}
function lineClock() {
    stroke("orange");
    line(displayWidth / 2, 600, (displayWidth / 2) - sec * 5, 600);
    stroke("crimson");
    line(displayWidth / 2, 625, (displayWidth / 2) - mn * 5, 625);
    stroke("yellow");
    line(displayWidth / 2, 650, (displayWidth / 2) - hr * 5, 650);
}
function arcClock() {
    let secAngle = map(sec, 0, 60, 270, 630);
    let minAngle = map(mn, 0, 60, 270, 630);
    let HourAngle = map(hr, 0, 12, 270, 630);
    noFill();
    stroke("orange");
    arc(200, 600, 60, 60, 270, secAngle);
    stroke("crimson");
    arc(200, 600, 100, 100, 270, minAngle);
    stroke("yellow");
    arc(200, 600, 140, 140, 270, HourAngle);
    
}
function mainClock() {
    let secAngle = map(sec, 0, 60, 270, 630);
    let minAngle = map(mn, 0, 60, 270, 630);
    let HourAngle = map(hr, 0, 12, 270, 630);
    
    noFill();
    stroke("orange");
    arc(700, 300, 400, 400, 270, secAngle);
    stroke("crimson");
    arc(700, 300, 425, 425, 270, minAngle);
    stroke("yellow");
    arc(700, 300, 450, 450, 270, HourAngle);
    
    
    push();
    strokeWeight(10);
    stroke("orange");
    translate(700, 300);
    rotate(secAngle);
    line(0, 0, 175, 0);
    pop();

    push();
    strokeWeight(10);
    stroke("crimson");
    translate(700, 300);
    rotate(minAngle);
    line(0, 0, 150, 0);
    pop();

    push();
    strokeWeight(10);
    stroke("yellow");
    translate(700, 300);
    rotate(HourAngle);
    line(0, 0, 100, 0);
    pop();
}