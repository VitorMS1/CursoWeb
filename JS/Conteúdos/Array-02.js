
/*-------------- Percorrendo array 01 ------------------*/
console.log(`\n----- Percorrendo array 01 -----`)

{    
    //forEach

    const alunos = ["Pedro", "João", "Vitor", "Marcelo"];
    
    /*  -A função forEach percorre o array, onde, para cada novo elemento do array
         ele executa a função contida entre parenteses ();  
        -A função contida para o forEach executar, receberá como parâmetros
         sempre o valor e o indice (nessa ordem) do elemento do array;
        -É possível também passar um terceiro parâmetro, que será o prórpio array;*/

    alunos.forEach((nome, indice) => console.log(`${indice+1}) ${nome}`));
    
}

/*-------------- Percorrendo array 02 ------------------*/
console.log(`\n----- Percorrendo array 02 -----`)

{
    //Map

    /*  -O map funciona de maneira similar ao forEach, porém, mais específica;
        -Ele permite criar um novo array a partir de um outro, porém, passando por
         alguma tranformação no processo;
        -Por via de regra, o array gerado terá a mesma quantidade de elementos que o original; */

    const numero = [2, 4, 5, 9, 8];

    const dobro = numero.map(valor => valor*2);
    console.log("Dobro 01: ", dobro);

    console.log("Dobro 02: ", numero.map(valor => valor*2));

    const transformaPar = numero.map(valor => ((valor % 2) == 0) ? valor : valor+1);
    console.log("Todos pares: ", transformaPar)

    //Em cadeia

    const imposto = valor => valor * 1.25;
    const desconto = valor => valor * 0.85;
    const formata = valor => `R$ ${parseFloat(valor).toFixed(2).replace(".", ",")}`;

    const valores = numero.map(imposto).map(desconto).map(formata);
    console.log("Preço: ", valores);

    //JSON ex:

    const listaJSON = 
    [
        '{"nome": "óleo", "marca": "soya", "preco": 10}', 
        '{"nome": "café", "marca": "pilão", "preco": 15}',
        '{"nome": "arroz", "marca": "crystal", "preco": 7.50}'
    ];

    const paraObj = elemento => JSON.parse(elemento);
    const pegaPreco = elemento => elemento.preco;

    const prateleira = listaJSON.map(paraObj).map(pegaPreco);

    console.log("preço JSON: ", prateleira);
}

/*-------------- Percorrendo array 03 ------------------*/
console.log(`\n----- Percorrendo array 03 -----`)

{
    //filter

    /*  -Também percorrerá o array, mas, realizando uma filtragem dos elementos
         com base no resultado da função passada;
        -Caso o elemento retorne true após a validação da função, então o metodo
         filter irá retorná-lo; */

    const nums = [1, 3, 4, 6, 7, 10];

    console.log("Pares: ", nums.filter(valor => valor % 2 == 0));
    console.log("Ímpares: ", nums.filter(valor => valor %2 != 0 ));
}

/*-------------- Percorrendo array 04 ------------------*/
console.log(`\n----- Percorrendo array 04 -----`)

{
    //Reduce

    /*  -O reduce assim como os demais, percorre o array. Porém, realizando
         operações entre os elementos do array, reduzindo/agregando em um único;
        -Seguindo sempre o padrão de, 
            valor acumulado (último resultado) + operação com elemento atual = Novo valor acumulado -> repete;
        -É possível também, passar um valor inicial para o acumulado. Sintaxe: arrayDesejado.reduce((função callback), valor inicial); */

    const valores = [5, 10, 15, 20];

    const reduzindoSoma = valores.reduce((valorAcumulado, valorAtualDoIndex) => valorAcumulado + valorAtualDoIndex);
    console.log("Somando: ", reduzindoSoma);

    console.log("Com inicial: ", valores.reduce((valor01, valor02) => {return valor01 - valor02}, 25));

    //Ex caótico:

    const arrayCaotico = [12, 2.5, -3, "mensagem", undefined, {a: 2}];

    console.log(arrayCaotico.filter(elemento => typeof(elemento) == "number").map(valor => Math.round(valor)).
    map(valor => (valor % 2) == 0 ? valor : valor + 1).reduce((valorAcumulado, valorAtual) => valorAcumulado * valorAtual));

    /*  -Nesse exemplo, há um filter que separa apenas os tipo number do array, um map que arredonda todos o valores
         fracionários, outro map que transforma todos os valores em par, e um reduce que multiplica todos, gerando o resultado; */

    //Ex com boolean:

    const fichaAlunos = 
    [
        {nome: "pedro", nota: 8.8, bolsista: false},
        {nome: "Vitor", nota: 9.7, bolsista: true},
        {nome: "João", nota: 6.5, bolsista: false}
    ]

    console.log("Todos são bolsistas? ", fichaAlunos.map(elemento => elemento.bolsista).
    reduce((aluno01, aluno02) => aluno01 && aluno02));

    console.log("Há algum bolsista? ", fichaAlunos.map(elemento => elemento.bolsista).
    reduce((aluno01, aluno02) => aluno01 || aluno02));
}

/*-------------- Concat ------------------*/
console.log(`\n----- Concat -----`)

{
    //concat

    /*  -Concatena array's, gerando um novo;
        -Também pode ser passados outros elementos como parâmetro; */

    const array01 = ["abc", "xyz", "fulano"];
    const array02 = [12, 14, 16];

    const arrayFundir = array01.concat(array02, "vinagre", [[4]]);
    console.log(arrayFundir);

    //Ex: concat com map

    const turmaA = 
    [
        {nome: "Maria", nota: 6.7},
        {nome: "Joaquim", nota: 5.4},
        {nome: "Isabela", nota: 9.5}
    ];

    const turmaB = 
    [
        {nome: "Pedro", nota: 8.7},
        {nome: "Manoel", nota: 10},
        {nome: "Gabriela", nota: 7.5}
    ];

    const notasTurmas = turmaA.concat(turmaB).map(elemento => elemento.nota);
    console.log(notasTurmas)


}