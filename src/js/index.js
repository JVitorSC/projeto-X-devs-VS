// Objetivos
// OBJETIVO 1 - quando clicarmos na seta de avançar temos que mostrar o proximo 
// cartao da lista
  
// passo 1 - dar um jeito de pegar o elemento HTML da seta avancar
const btnAvancar = document.getElementById("btn-avancar")
const btnVoltar = document.getElementById("btn-voltar")
let cartaoAtual = 0;
const cartoes = document.querySelectorAll(".cartao");
// passo 2 - dar um jeito de identificar o clique do usuário na seta avançar

btnAvancar.addEventListener("click", function(){
    
    if(cartaoAtual === cartoes.length - 1) return;
    
    
    // passo 4 - buscar o cartão que esta selecionado e esconder

    const cartaoselecionado = document.querySelector(".selecionado");
    cartaoselecionado.classList.remove("selecionado")

    //passo 3 - fazer aparecer o próximo cartão da lista
    
    cartaoAtual++;
    cartoes[cartaoAtual].classList.add("selecionado");




})



// OBJETIVO 2 - quando clicarmos na seta de voltar temos que mostrar o cartão 
btnVoltar.addEventListener("click", function(){
    
    if(cartaoAtual === 0) return;
    
    
    // passo 4 - buscar o cartão que esta selecionado e esconder

    const cartaoselecionado = document.querySelector(".selecionado");
    cartaoselecionado.classList.remove("selecionado")

    //passo 3 - fazer aparecer o próximo cartão da lista
    
    cartaoAtual--;
    cartoes[cartaoAtual].classList.add("selecionado");

})
  
