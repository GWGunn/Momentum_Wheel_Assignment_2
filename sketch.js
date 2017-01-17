function setup() {
    createCanvas(800,600);
    frameRate(12);
}

function draw() {
    translate(width/2,height/2)

    if(frameCount<=60){
        strokeWeight(5)
        stroke(lerpColor(color('#ea0043'), color('#0fefca'), frameCount/60));
        var alp = PI/30;
      
        var x = Math.cos(frameCount*alp);
        var y = Math.sin(frameCount*alp);
    
        line(300,0,x*300,y*300)
    }

  
}
