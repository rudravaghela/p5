function preload(){

}

function setup(){
canvas = createCanvas(630,420);
canvas.position(5,250);
video = createCapture(VIDEO);
video.hide();
tintcolour = "";
}

function draw(){
image(video,0,0,630,420);
tint(tintcolour);
}
function take_snapshot(){
save("rudra.png");
}

function filtertint(){
tintcolour = document.getElementById("colourname").value;
}