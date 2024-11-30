// orientacao a objetos e JSON

// caneta bic tem a função de escrever, a caneta tem atributos, como a cor ou tamanho da ponta.
// funcoes podem ser chamadas de metodo

var caneta = {
    cor: "Azul",
    quantTinta: 100,

    escrever: function()
    {
        console.log("escrever");
    }
}

// chamar metodo
caneta.escrever();

// alterando o atributo
caneta.cor = "Preto"

var pessoa = {
    cpf: 123,
    pertences: caneta
}

pessoa.pertences.escrever;

