img=""
progress="";
objects=[];
function setup(){
    canvas=createCanvas(480,380);
    canvas.center();
   
}
function preload(){
    img=loadImage('baby.jpg');
    

}
function draw(){
    image(img,0,0,480,380);
    if (progress !=""){
        objectDetector.detect(img,gotResult);
        for(i=0;i<objects.length;i++){
            document.getElementById("status").innerHTML="Status: Object Detected";
            document.getElementById("number_of_objects").innerHTML="Number of Objects : " + objects.length;
            fill("#FF0000");
            percent=floor(objects[i].confidence*100);
            text(objects[i].label + "" + percent + "%",100 + 15,80 + 15);
           noFill();
           stroke("#FF0000");
           rect(100,100,300,250);
        }
        }
        
}

function gotResult(error,results){
if(error){
    console.log(error);
}
console.log(results);
objects=results;

}

function start(){
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Status: Object Detecting";

}
function modelLoaded(){
    console.log("Model Loaded!");
    progress=true;
    
}