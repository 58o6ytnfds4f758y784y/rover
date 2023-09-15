canvas =document.getElementById("myCanvas");
ctx=canvas.getContext("2d")
fotosmarte = ["mars1.jpg","mars2.jpg","mars3.jpg","mars4.jpg","mars5.jpg"];
numrandom = Math.floor(Math.random() *4);
rover_width = 100;
rover_height = 90;
rover_x = 10;
rover_y = 10;

background_image = fotosmarte[numrandom];
rover_image="rover.png";

function add(){
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    rover_imgTag = new Image();
    rover_imgTag.onload=uploadrover;
    rover_imgTag.src =rover_image;
}

function uploadBackground(){
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}


function uploadrover(){
    ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
}


window.addEventListener("keydown", mykeydown);
function mykeydown(e){
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(keyPressed == "37"){
        izq();
    }
    if(keyPressed == "38"){
        arriba();
    }
    if(keyPressed == "39"){
       derecha();
    }
    if(keyPressed == "40"){
        abajo();
     }

}


function izq(){
    if( rover_x >=0 ){
        rover_x = rover_x - 10;
        uploadBackground();
        uploadrover();
    }
}
    function derecha(){
        if( rover_x <=700 ){
            rover_x = rover_x + 10;
            uploadBackground();
            uploadrover();
        }
    }
    function abajo(){
        if( rover_y <=500 ){
            rover_y = rover_y + 10;
            uploadBackground();
            uploadrover();
        }
    }
    function arriba(){
        if( rover_y >=0 ){
            rover_y = rover_y - 10;
            uploadBackground();
            uploadrover();
        }
    }