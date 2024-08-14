var botoes = document.querySelectorAll(".nav__button")
var button = document.querySelector("#b1")

button.style.backgroundColor = 'white';
button.style.color = "black";

botoes.forEach(botao => {
    botao.addEventListener("click", function(){
        botao.forEach(b => {
            b.style.backgroundColor = "";
            b.style.color = "";
        alert("aqui");
    })
        botao.style.backgroundColor = 'white';
        botao.style.color = 'black';
    })

})