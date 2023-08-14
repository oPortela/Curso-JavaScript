/*
Crie uma função que valide usuário e senha.
Usuário correto: matheus
senha correta: 123
*/

function validar(usuario, senha){
    if (usuario === "matheus" && senha === '123') {
        return true;
    } else {
        return false;
    }
}

let usuario = "matheus";
let senha = '123';
let validacao = validar(usuario, senha);
if (validacao) {
    console.log('Acesso concedido')
} else {
    console.log('Acesso NEGADO!')
}
