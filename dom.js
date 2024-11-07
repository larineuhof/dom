// Atividade 1: Alterar Cor ao Clicar
//const quadrados = document.querySelectorAll(".quadrado");
//quadrados.forEach(quadrado => {
    //quadrado.addEventListener("click", () => {
        //const originalColor = quadrado.getAttribute("data-original");
        //quadrado.style.backgroundColor = quadrado.style.backgroundColor === originalColor ? "yellow" : originalColor;
    //});
//});
// usei "querySelectorAll" para capturar todos os elementos com a classe "".quadrado" e adicionei um evento de clique para trocar a cor entre amarelo e a cor original. 

// Atividade 2: Contador de Cliques
//let contador = 0;
//const contadorDisplay = document.getElementById("contador");
//document.getElementById("contarCliques").addEventListener("click", () => {
    //contador++;
    //contadorDisplay.innerText = contador;
//});
//document.getElementById("resetarCliques").addEventListener("click", () => {
    //contador = 0;
    //contadorDisplay.innerText = contador;
//});
// fiz um contador de cliques bem simples. A cada clique no botão de contagem, o contador aumenta, e o botão de reset zera o valor. 

// Atividade 3: Mostrar/Ocultar Texto
//const textoEscondido = document.getElementById("textoEscondido");
//document.getElementById("toggleTexto").addEventListener("click", () => {
    //textoEscondido.style.display = textoEscondido.style.display === "none" ? "block" : "none";
//});
// fiz um botão que alterna entre mostrar e ocultar um texto. a propriedade "display" para esconder ou exibir o elemento.

// Atividade 4: Alterar Texto com Prompt
//document.getElementById("mudarTexto").addEventListener("click", () => {
    //const novoTexto = prompt("digite o novo texto:");
    //if (novoTexto !== null) {
        //document.getElementById("textoPadrao").innerText = novoTexto;
    //}
//});
// esse código permite que o usuário troque o texto padrão por outro, inserido através de um "prompt".
// é uma função prática para personalizar o conteúdo ao clicar, e a implementação foi bem fácil, pois o "prompt" já facilita pegar entradas diretamente do usuário.

// Atividade 5: Mudança de Texto ao Pressionar Tecla
//document.addEventListener("keydown", (event) => {
    //document.getElementById("mensagemTecla").innerText = `você pressionou: ${event.key}`;
//});
// essa parte detecta a tecla que o usuário pressiona e exibe qual foi no elemento "mensagemTecla". 
// o evento "keydown" registra as teclas e usamos "event.key" para identificar a tecla. 

// Atividade 6: Eleições Municipais
//const candidatos = {
    //"1": { nome: "Lula", foto: "https://media.gazetadopovo.com.br/2021/03/08214148/lula-Fabrice-COFFRINI-AFP-960x540.jpg" },
    //"2": { nome: "Bolsonaro", foto: "https://media.gazetadopovo.com.br/2024/09/06003344/Jair-Bolsonaro-ex-presidente-Marcelo-Camargo-Agencia-Brasil-960x540.jpg" }
//};
//const votos = { "1": 0, "2": 0, nulo: 0 };
//const nomeCandidato = document.getElementById("nomeCandidato");
//const fotoCandidato = document.getElementById("fotoCandidato");
//const confirmacao = document.getElementById("confirmacao");
//const confirmarVotoButton = document.getElementById("confirmarVoto");
//document.getElementById("votar").addEventListener("click", () => {
    //const voto = prompt("digite o número do candidato (1 para lula, 2 para bolsonaro, outro para voto nulo):");

    //if (candidatos[voto]) {
       //nomeCandidato.innerText = candidatos[voto].nome;
        //fotoCandidato.src = candidatos[voto].foto;
        //fotoCandidato.style.display = "block";
        //confirmacao.style.display = "block";
        //confirmarVotoButton.style.display = "block";
    //} else {
        //nomeCandidato.innerText = "voto nulo";
        //fotoCandidato.style.display = "none";
        //confirmacao.style.display = "none";
        //confirmarVotoButton.style.display = "block";
    //}
//});
//confirmarVotoButton.addEventListener("click", () => {
    //const candidatoAtual = nomeCandidato.innerText;

    //if (candidatoAtual === "lula") {
        //votos["1"]++;
    //} else if (candidatoAtual === "bolsonaro") {
        //votos["2"]++;
    //} else {
        //votos.nulo++;
    //}

    //console.log("contagem de votos:", votos);

    //nomeCandidato.innerText = "";
    //fotoCandidato.style.display = "none";
    //confirmacao.style.display = "none";
    //confirmarVotoButton.style.display = "none";
//});
// primeiro, o usuário digita o número do candidato ou insere um número que resulta em "voto nulo". 
// a confirmação do voto é exibida com a foto do candidato. ao confirmar, o voto é contabilizado no console.
// esse foi complicado, pois precisa de várias etapas de validação e exibição para garantir que a lógica de voto funcione corretamente.

// Desafio: Criação de Lista ao Clicar
//document.getElementById("adicionarItem").addEventListener("click", () => {
    //const novoItem = prompt("digite algum item para ser adicionado à lista:");
    //if (novoItem) {
        //const lista = document.getElementById("listaItens");
        //const item = document.createElement("li");
        //item.innerText = novoItem;
        //lista.appendChild(item);
    //}
//});
// uma lista onde o usuário pode adicionar novos itens ao clicar em um botão.
// O "prompt" pede o item, e com "createElement" e "appendChild", adicionamos o item à lista "listaItens".