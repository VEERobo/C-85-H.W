canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");
car1_width=120;
car1_height=70;
car1_x=10;
car1_y=10;
car2_width=120;
car2_height=70;
car2_x=10;
car2_y=100;
background_image="racing.jpg";
car1_image="car1.png";
car2_image="car2.png";
function add(){
    background_imageTag=new Image();
    background_imageTag.onload=uploadBackground;
    background_imageTag.src=background_image;
    car1_imageTag=new Image();
    car1_imageTag.onload=uploadCar1;
    car1_imageTag.src=car1_image;
    car2_imageTag=new Image();
    car2_imageTag.onload=uploadCar2;
    car2_imageTag.src=car2_image;
}
function uploadBackground(){
    ctx.drawImage(background_imageTag, 0, 0, canvas.width, canvas.height);
}
function uploadCar1(){
    ctx.drawImage(car1_imageTag, car1_x, car1_y, car1_width, car1_height);
}
function uploadCar2(){
    ctx.drawImage(car2_imageTag, car2_x, car2_y, car2_width, car2_height);
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if(keyPressed=='38'){
        car1_up();
        console.log("up_arrow_key");
    }
    if(keyPressed=='40'){
        car1_down();
        console.log("down_arrow_key");
    }
    if(keyPressed=='39'){
        car1_right();
        console.log("right_arrow_key");
    }
    if(keyPressed=='37'){
        car1_left();
        console.log("left_arrow_key");
    }
    if(keyPressed=='87'){
        car2_up();
        console.log("w_key");
    }
    if(keyPressed=='83'){
        car2_down();
        console.log("s_key");
    }
    if(keyPressed=='68'){
        car2_right();
        console.log("d_key");
    }
    if(keyPressed=='65'){
        car2_left();
        console.log("a_key");
    }
}
function car1_up(){
    if(car1_y >=0){
        car1_y= car1_y-10;
        console.log("up arrow is pressed, x="+car1_x+"y="+car1_y);
        uploadBackground();
        uploadCar1();
    }
}
function car1_down(){
    if(car1_y <=510){
        car1_y= car1_y+10;
        console.log("down arrow is pressed, x="+car1_x+"y="+car1_y);
        uploadBackground();
        uploadCar1();
    }
}
function car1_left(){
    if(car1_x >=0){
        car1_x= car1_x-10;
        console.log("left arrow is pressed, x="+car1_x+"y="+car1_y);
        uploadBackground();
        uploadCar1();
    }
}
function car1_right(){
    if(car1_x <=600){
        car1_x= car1_x+10;
        console.log("right arrow is pressed, x="+car1_x+"y="+car1_y);
        uploadBackground();
        uploadCar1();
    }
}
function car2_up(){
    if(car2_y >=0){
        car2_y= car2_y-10;
        console.log("up arrow is pressed, x="+car2_x+"y="+car2_y);
        uploadBackground();
        uploadCar2();
    }
}
function car2_down(){
    if(car2_y <=510){
        car2_y= car2_y+10;
        console.log("down arrow is pressed, x="+car2_x+"y="+car2_y);
        uploadBackground();
        uploadCar2();
    }
}
function car2_left(){
    if(car2_x >=0){
        car2_x= car2_x-10;
        console.log("left arrow is pressed, x="+car2_x+"y="+car2_y);
        uploadBackground();
        uploadCar2();
    }
}
function car2_right(){
    if(car2_x <=600){
        car2_x= car2_x+10;
        console.log("right arrow is pressed, x="+car2_x+"y="+car2_y);
        uploadBackground();
        uploadCar2();
    }
}
if(car1_x > 700){
    console.log("car1 win");
    document.getElementById("car").innerHTML="car1 won";
}
if(car2_x > 700){
    console.log("car2 win");
    document.getElementById("car").innerHTML="car2 won";
}