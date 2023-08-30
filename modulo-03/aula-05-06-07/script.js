function clicou() {
    const teste2 = document.querySelector('#teste2');
    const ul = teste2.querySelector('ul');

    ul.innerHTML += "<li> Item 3 </li>";
    ul.innerHTML += "<li> Item 4 </li>";
    ul.innerHTML += "<li> Item alterado </li>"; // ou
    ul.innerHTML = ul.innerHTML + "<li> Novo Item alterado </li>";

    console.log(ul);  //retorna o conteudo que está dentro dele.

    //console.log(ul);

    /*console.log(teste2.children); //com o children eu consigo ver quais os elementos estão na minha div, etc... os filhos de cada elemento...
    console.log(teste2.children[0].children);
    console.log(teste2.children[1].children);*/
};

function clicou2_0() {
    const teste2 = document.querySelector('#teste2');
    const ul = teste2.querySelector('ul');

    const teste3 = document.querySelector('#teste3');
    const ul1 = teste3.querySelector('ul');


    /*
    ul.children[0].innerHTML = "Item <strong>Alterado</strong>"; //ele adicionará um HTML no lugar.
    ul.children[1].innerHTML = "Item <del>não alterado</del>"


    ul1.children[0].innerText = "Item <strong>Alterado</strong>"; //ele adicionará um texto
    ul1.children[1].innerHTML = "Item <del>não alterado</del>"
    */

    ul.outerHTML = "<h1>Alterado!-*/</h1>"; //ele vai alterar todo o elemento, igual aqui trocou um UL por um H1...

    console.log(ul.outerHTML);
};

function clicouBotao() {
    const botao = document.querySelector('.botao');

    botao.innerHTML = "Você clicou no botão";
}