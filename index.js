let listaDeVagas = [];
let listaDeCandidatos = [];


function executar(){
    let opcao = ""
    do {
        opcao = exibirMenu()
    switch (opcao) {
        case "1":
            listarVagas()
        break
        case "2":
            criarVaga()
        break
        case "3":
            exibirVaga()
        break
        case "4":
            
        break
        case "5":
            
        break
        }
    } while (opcao !== "6")
}

function exibirMenu(){
    return prompt(
        "Seja bem-vindo ao sistema de vagas." +
        "\nEscolha uma das opções abaixo:" +
        "\n" +
        "\n1 - Listar vagas disponíveis" +
        "\n2 - Criar uma nova vaga" +
        "\n3 - Visualizar uma vaga" +
        "\n4 - Inscrever um candidato em uma vaga" +
        "\n5 - Excluir uma vaga" +
        "\n6 - Sair"
    )
}

function criarVaga(){
    const vaga = {};
    vaga.indice = listaDeVagas.length + 1
    vaga.nomeDaVaga = prompt("Qual o nome da vaga?");
    vaga.descricao = prompt("Qual a descrição da vaga?");
    vaga.dataLimite = prompt("Qual a data limite para a vaga?");

    const confirmacao = confirm("Esta correto as informações digitadas?\n" +
    "\nNome da vaga: " + vaga.nomeDaVaga +
    "\nDescrição da vaga: " + vaga.descricao +
    "\nData limite para a vaga: " + vaga.dataLimite +
    "\nIndice da vaga: " + vaga.indice
    )

    if(confirmacao == true){
        alert("Vaga cadastrada com sucesso!");
        listaDeVagas.push(vaga);
    } else{
        alert("Retornando ao menu!");
    }
}

function listarVagas(){
    for (i = 0; i < listaDeVagas.length; i++){
        alert("Lista de vagas cadastradas:\n" +
        "\nÍNDICE: " + listaDeVagas[i].indice +
        "\nNOME: " + listaDeVagas[i].nomeDaVaga +
        "\nQUANTIDADE TOTAL DE CANDIDATOS INSCRITOS: " + listaDeCandidatos.length
        )
    }
}

function exibirVaga() {
    const indice = prompt("Informe o índice da vaga que deseja exibir:")
    const vaga = listaDeVagas[indice]
  
    const candidatosEmTexto = vaga.reduce(function(textoFinal, candidato) => textoFinal + "\n - " + candidato, "")
  
    alert(
      "Vaga nº " + indice +
      "\nNome: " + vaga.nome +
      "\nDescrição: " + vaga.descricao +
      "\nData limite: " + vaga.dataLimite +
      "\nCandidatos inscritos:" + candidatosEmTexto
    )
  }


/* function inscreverCandidato(){
    const candidato = {}
    candidato.nome = prompt("Qual o seu nome completo?")

    const confirmacao = confirm("Esta correto as informações digitadas?\n" +
    "\nNome do candidato: " + vaga.nomeDaVaga +
    "\nDescrição da vaga: " + vaga.descricao +
    "\nData limite para a vaga: " + vaga.dataLimite +
    "\nIndice da vaga: " + vaga.indice
    )
    if(confirmacao == true){
        alert("Candidato cadastrado para vaga.");
        listaDeCandidatos.push(candidato);
    } else{
        alert("Retornando ao menu!");
    }
} */

executar()