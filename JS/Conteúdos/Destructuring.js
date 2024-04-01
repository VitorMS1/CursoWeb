
//Operador de desestruturação - Destructuring:


{   /*--------------Em Array------------------*/

    const palavras = ["olá", "segunda-feira", "amanhecer"];
    const [saudacao, , verbo, comida = "frango", aaa] = palavras;
    console.log(saudacao, verbo, comida, aaa);

    /* -Com esse recurso é possivel declarar multiplas variáveis e seus valores, de forma mais prática;
       -Também sendo possível extrair valores de um array e depositá-los em uma variável; 
       -É possível definir um valor padrão para a variável, ignorar um valor (colocando ,)*/


    //Outra froma 01:

    const [n1, , n3,...n4] = [1, 2, 3, 4, 44, 444]; //Com ... é possível coletar o resto do array, como um array em uma variável;
    console.log(n1, n3, n4);

    //Outra forma 02:

   let a, b;
   [a, b] = [5, 10];
   console.log(a, b);

   //Também é possivel utilizar esse recurso para inverter valores:

   [a, b] = [b, a];
   console.log(a, b);
}

{   /*--------------Em Objeto------------------*/

    const animais = 
    {
        id01: "Girafa",
        id02: "Elefante",
        id03: "Camaleão",
        id04: "Cervo"
    }

    const [amarelo, pesado,...outros] = [animais.id01, animais.id02, animais.id03, animais.id04]
    console.log(amarelo, pesado, outros)

    //Outra froma

    const comidas = 
    {
        nome: "Banana",
        cor: "Amarela",
        detalhes:
            {
                nomeTipo: ["Nanica", "prata", "Maçã"],
                preco: "10/kg"
            },
        estoque: 
        {
            quantidade: 500,
            deposito: "01-Goiania"
        }
    }

    const {nome: n, cor: c, detalhes: t, estoque: {quantidade, deposito}, aleatorio = 2} = comidas;
    console.log(`${n}, ${c}, ${JSON.stringify(t)}, ${quantidade}, ${deposito}, ${aleatorio}`);


    /*  -Esse metodo permite coletar os atributos de um objeto, incluindo objetos filhos a exemplo;
        -Durante a coleta e armazenamento dos atributos em variáveis, é possivel definir
        um nome diferente ou valor padrão para a nova variável (mas isso de forma opcional);
        -Sintaxe: tipo de variável + {} com os atrivutos do objetos desejados + = + nome do objeto; */
}

{   /*--------------Em Função com objeto ------------------*/

    function numAleatorio ({max = 100, min = 1})
    {
        return Math.floor(Math.random() * (max - min ) + min);
    }

    const objetoExemplo = {max: 100, min : 1};
    console.log(numAleatorio(objetoExemplo));

    /* Assim, permite passar atributos de um objeto como parâmetros para uma função,
    definindo os parametros como um detructurig de objeto, ao invés de um parâmetro comum; */
}

{  /*--------------Em Função com array------------------*/

    function invert ([min = 1, max = 100])
    {
        if (min > max) { [min, max] = [max, min];}
        return Math.floor(Math.random() * (max - min ) + min);
    }

    const valores = [50, 5];
    console.log(invert(valores));

    /* Assim, permite passar valores de um array como parâmetros para uma função,
    definindo os parametros como um detructurig de array, ao invés de um parâmetro comum; */
}
