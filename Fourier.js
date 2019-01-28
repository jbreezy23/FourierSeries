var time=0;
let wave=[];
let slider;
let slider2;
var sinwave;
var waverad;

//Setup
function setup(){
createCanvas(600,400);
slider=createSlider(1,20,1);
slider2=createSlider(2,36,2);
}

//draw the main circle
function draw(){
translate(150,200);
background(0);

let x=0;
let y=0;
// var sinwave=(20*sin(time));
// if (sinwave<0){
// 	sinwave*=-1;
// }
for (let i=0;i<slider.value();i++){
// for (let i=0;i<sinwave;i++){

//draw a smaller tangent circle
let prevx=x;
let prevy=y;
let n=i*2+1;
let radius=75*(4/(n*PI));

x+=radius*cos(n*time);
y+=radius*sin(n*time);


stroke(255,150);
noFill();
ellipse(prevx,prevy,radius*2);

//draw a line from Big Cir to Tan Cir
fill(255);
stroke(255);
line(prevx,prevy,x,y);
}

wave.unshift(y);

//Draw the resulting sine wave to the right
translate(125,0);
line(x-125,y,0,wave[0]);
beginShape();
noFill();
for (let i=0;i<wave.length;i++){
	vertex(i,wave[i]);
	// if (i<100){
	// 	line(x-125,y,i,wave[i]);
	// }
}
endShape();
time += (slider2.value())/100;

//remove points from wave array
if (wave.length>250){
	wave.pop();
}

}