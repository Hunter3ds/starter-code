var button1 = document.querySelector("#b1");
var button2 = document.querySelector("#b2");
var button3 = document.querySelector("#b3");

var click1 = true;
var click2 = false;
var click3 = false;

button1.addEventListener("click", function(){
    click1 = true;
    click2 =  false;
    click3 = false;
})
button2.addEventListener("click", function(){
    click2 = true;
    click1 = false;
    click3 = false;
})
button3.addEventListener("click", function(){
    click3 = true;
    click1 = false;
    click2 = false;
})

if (click1 === true){
    button1.style.backgroundColor = "white";
    button1.style.color = "black";
} else if (click1 === false){
    button1.style.backgroundColor = "black";
    button1.style.color = "white";
}
if (click2 === true){
    button2.style.backgroundColor = "white";
    button2.style.color = "black";
} 
if(click3 === true){
    button3.style.backgroundColor = "white";
    button3.style.color = "black";
}
