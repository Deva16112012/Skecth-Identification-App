function setup(){
    canvas=createCanvas(280,280);
    canvas.center();
    background("white");
    d=window.speechSynthesis;
    canvas.mouseReleased(c);
}
function preload(){
    h=ml5.imageClassifier('DoodleNet');
}
function draw(){
    strokeWeight(13);
    stroke(0);
    if(mouseIsPressed){
        line(pmouseX,pmouseY,mouseX,mouseY);
    }
}
function c(){
    h.classify(canvas,a);
}
function a(error,result){
    if(error){
        console.log(error);
    }
    else{
        console.log(result);
        document.getElementById("p1").innerHTML="Image: "+result[0].label;
        document.getElementById("p2").innerHTML="Confidence: "+Math.floor(result[0].confidence*100)+"%";
        f=new SpeechSynthesisUtterance(result[0].label);
        d.speak(f);
        }
}
function b2(){
    background("white");
}