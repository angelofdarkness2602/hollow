nosex = 0;
nosey = 0;

function preload(){
    fangs = loadImage("https://i.postimg.cc/zX5wFFMD/154495-vampire-fangs-png.png");
}

function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("poseNet is initialized");
} 

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        nosex = results[0].pose.nose.x - 20;
        nosey = results[0].pose.nose.y + 10;
    }
}

function draw(){
    image(video, 0, 0, 300, 300);
    image(fangs, nosex, nosey, 50, 50)
}

function take_snapshot(){
    save("my filter image.jpg");
}

