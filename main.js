nose_x = 0;
nose_y = 0;

function preload(){
    clown_nose = loadImage('https://i.postimg.cc/63yX2960/clown-nose-img.png');
}

function setup(){
    canvas = createCanvas(500, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(500, 500);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("PoseNet Is Initiated!");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        nose_x = results[0].pose.nose.x - 12;
        nose_y = results[0].pose.nose.y - 12;
        console.log("nose x = " + nose_x);
        console.log("nose y = " + nose_y);
    }
}

function draw(){
    image(video, 0, 0, 500, 500);
    //fill(255, 0, 0);
    //stroke(255, 0, 0)   (CODE FOR DRAWING A CIRCLE)
    //circle(nose_x, nose_y, 20);
    image(clown_nose, nose_x, nose_y, 30, 30);

}

function take_snapshot(){
    save('myRedNoseImage.png');
}