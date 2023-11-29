{

    let a = "arroz";   //Formas básicas de declarar uma string;
    let b = 'batata';    
   
    /*---------------------------------------*/
    //Methods String

    console.log(a.indexOf("z"));    //.indexOf(x, y) retorna o index (índice, posição) da primeira aparição do valor x, a partir do index y (contagem se inicia no 0);
    console.log(a.charAt(3));       //.charArt(x) retorna o caractere de index x;
    console.log(a.charCodeAt(2));   //.charCodeAt() retorna o valor do caractere de index x na tabela unicode;
    console.log(a.codePointAt(2));  //.codePointAt() retorna o valor do caractere de index x na tabela unicode;
   
    /* A diferença entre charCodeAt() e codePointAt() se dá pelo primeiro se limitar a retornar apenas um número 
    entre 0 e 65535 (não retorna um valor unicode maior que 65535), já o segudo retorna o valor completo */
   
    console.log(a.substring(0, 3));            //.substring(x, y) retorna caractereres entre o index x e y, logo uma substring da string (informando apenas o index x, a substring é gerada partir do index x);
    console.log(a.concat(" com ").concat(b));  //.concact(x) concatena com o que for informado no x;
   
    console.log(a.replace("r", "AAA"));   //.replace(x, y) retorna uma nova string com o valor de x trocado por y;
    console.log(a.replace(/r/g, "ZZZ"));  //possível utilizar regEx(ex: /r/g diz que todas letras "r" da string sejam trocadas);
    console.log(a.replaceAll("r", "bbb"));

    console.log("1,2,3,carro,barco".split(","));  //.split(x) transforma a string em um array utilizando o separador informado em x;

    /*---------------------------------------*/
    //Template String/literals
    
    let comida = "frango";
    let valor = 25.00;
    let entrega = 7.00; 

    console.log(`\n O ${comida} custa R$ ${valor} + a taxa de entrega de R$ ${entrega}. Totalizando: R$ ${valor + entrega}`);

    /* - Template Strings são declaradas utilizando back-ticks (``, crase)
       - É possivel interpolar expressões e variáveis em um template string por meio de: ${} 
       - Nessa expressão ${} é possível também, a exemplo, fazer calculos, chamar metodos e funções*/

    //exemplos:

    let id = [1, 2];
    let carros = ["Fiat Palio 2013", "Honda civic 2019"];
    let servicosValorhora = ["Reparo embreagem", 25.55, "Troca óleo", 99.90];
   
    let templateOficina = 
    `
      Lista de serviços -
      -------
         ID: ${id[0]}
         Modelo: ${carros[0]}
         Serviço: ${servicosValorhora[0]}
         Valor hora: R$ ${servicosValorhora[1]}
         Total: R$ ${(servicosValorhora[1] * 3).toFixed(2)}
      -------
         ID: ${id[1]}
         Modelo: ${carros[1]}
         Serviço: ${servicosValorhora[2]}
         Valor hora: R$ ${servicosValorhora[3]}
         Total: R$ ${(servicosValorhora[3] * 3).toFixed(2)}
      -------
    `;

    console.log(templateOficina);
};