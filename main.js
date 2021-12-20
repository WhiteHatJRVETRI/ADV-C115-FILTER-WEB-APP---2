noseX=0;
noseY=0;

function preload(){
clown_nose = loadImage('lip.png')
}

function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses)
}

function modelLoaded(){
    console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{
if(results.length>0){
    console.log(results)
    noseX=results[0].pose.nose.x+2
    noseY=results[0].pose.nose.y+5
}
}
function takesnapshot(){
    save("face.png");
}
function draw(){
    image(video,0,0,300,300)
    image(clown_nose,noseX,noseY,30,30)
}