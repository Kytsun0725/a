noseX=0;
noseY=0;

ojo_i_X=0;
ojo_i_Y=0;

ojo_d_X=0;
ojo_d_Y=0;

function preload() {    
kuiwui = loadImage('https://i.postimg.cc/wvkpwD95/dibujo-de-frutas-en-una-rodaja-fondo-blanco-kiwi-con-semillas-ilustraci-n-acuarela-verde-claro-19504.png');
san = loadImage('https://i.postimg.cc/yN4CBLdX/png-clipart-watermelon-drawing-watermelon-food-summer-removebg-preview.png');
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet esta inicializado');
}

function gotPoses(results) 
{
    if(results.length > 0)
    {
        noseX = results[0].pose.nose.x-15;
        noseY = results[0].pose.nose.y-15;

        
        ojo_i_X = results[0].pose.leftEye.x-15;
        ojo_i_Y = results[0].pose.leftEye.y-15;

        ojo_d_X = results[0].pose.rightEye.x-15;
        ojo_d_Y = results[0].pose.rightEye.y-15;

        console.log(results);
        console.log("nose x =" + results[0].pose.nose.x);
        console.log("nose y =" + results[0].pose.nose.y);
    } 
 } 

function draw() {
image(video, 0, 0, 300, 300);
image(kuiwui, noseX, noseY, 30, 30)
image(san, ojo_i_X, ojo_i_Y, 30, 30)
image(san, ojo_d_X, ojo_d_Y, 30, 30)
}


function take_snapshot() {
    save('myFiltrerTmage.png');
}