function clicou() {
    alert('Clicou no botão');
    console.log("Clicou e foi para o console")
};


let botao = document.querySelector('.botao');
botao.addEventListener("click", () => {
    clicou();
});

/*document.querySelector('.botao').addEventListener("click", () => {
    clicou()
})

//Podemos usar essas outras formas além da de cima.

/*
let botao = document.querySelector('.botao');

botao.addEventListener("click", clicou); //add o evento a classe que pegar no querySelector, e colocar o que ela vai realizar exemplo("click")

botao.addEventListener("click", function() {
    clicou();
});

botao.addEventListener("click", () => {
    clicou()
});
*/