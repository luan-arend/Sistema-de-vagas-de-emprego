function executar(){
    let opcao = ""
    do {
        opcao = exibirMenu()
    switch (opcao) {
        case "1":
            
        break
        case "2":
            
        break
        case "3":
            
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
executar()