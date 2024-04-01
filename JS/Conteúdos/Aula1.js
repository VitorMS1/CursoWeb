/* Permite criar uma área comentada */ 
// Permite criar uma linha comentada;

//01 Imprimindo no console
{
    console.log(1,3,5,7,9);  //declarando valor diretamente;
    console.log(2,4,6,8,10); 
};

/*---------------------------------------*/

//02 Variáveis e constante
{                                                       
    var quantidade = 7;         //Variáveis (e constantes) amarzenam dados;
    let preco = 3.5;            //Variáveis var possuem escopo global (São válidas em todo o código, exceto se criadas em uma fução);
    let x;                      //Variáveis let possuem escopo em bloco (Só "existem" dentro deste bloco de código);
    const z = 100;               /* - Variáveis const (constantes) possuem escopo em bloco;
                                    - Não podem ser alteradas ou inicializadas vazias;
                                    - Sempre que possível, recomenda-se a sua utilização ao invés de let e var; */

    console.log(quantidade);     //Imprimindo;
    console.log(preco);
    console.log(x);              //Retorna "undefined" pois o valor de x não foi definido;
    console.log(z);

    preco = 40;                  //Alterando valor de uma váriaverl;

    console.log(preco);
};

/*---------------------------------------*/

//03 Cálculos com variáveis
{

    let vendidos = 50;
    let valor = 10.90;

    //Cálculo no print;
    console.log(vendidos + valor);

    //Cálculo na variável;
    let soma = vendidos + valor;
    let subtrai = vendidos - valor;
    let multiplica = vendidos * valor;
    let divide = vendidos / valor;
    let equacao = (vendidos + 
                     (valor * vendidos + 10)
                   ) / valor;

    console.log(soma);
    console.log(subtrai);
    console.log(multiplica);
    console.log(divide);
    console.log(equacao);

};

/*---------------------------------------*/

//04 Concatenando;
{
    let nome = "Vitor";
    let adjetivo = "normal";
    let numero = 3;

    console.log(nome + " é " + adjetivo);
    console.log("Aluno: " + nome
                + " --- Truma: " + numero);

    //Texto com número;
    console.log("10" + numero);   //+ = Concatena; 
    console.log(nome + numero);   
    console.log("10" * numero);   //(*, / ou -) Calcula como número normalmente;
    console.log(nome - numero);   // Falha retornando um não número(NaN);   

    //Outra forma

    console.log("O ".concat(nome).concat(" é ").concat(adjetivo));  //.concact(x) concatena com o que for informado no x;

    //Concatenando direto na variável

    let x = 3;             //numbers;
    x += 2;
    let y = "arroz";      //strings;
    y += " e macarrão";
    let z = 3;            //numbers + strings;
    z += " Casas";

    console.log(x);
    console.log(y);
    console.log(z);
};

/*---------------------------------------*/

//05 Tipos de variavél 01;
{
    let valor = 315.895;            //Número - Number;
    let comida = "macarronada";     //Texto - String;
    let fato = true;                //Verdadeiro ou falso - Boolean;

    console.log(typeof valor);
    console.log(typeof comida);    //typeof retorna o tipo;
    console.log(typeof fato);
};

/*--------------EXEMPLOS------------------*/

//Ex01: Cálculando área de uma circunferência

//01 básica
{    
    let raio = 56;         //Formula: Area = (PI * raio²); 
    const PI = 3.141592;
    let area = (PI * (raio * raio));

    console.log("A área do círculo de raio " + 
                raio + ", é " + area + " m².");
};

//02 Melhor (Recursos explicados em String, Math e Numbers)
{
    let raio = 10;
    let area = (Math.PI * Math.pow(raio, 2));   //Math

    console.log(`A área do círculo de raio ${raio} é ${area.toFixed(2)} m².`);   //template string
};

//Ex02: Trocando de valores entre váriaveis

//01 básica
{    
    let x = 1;    //Trocar valor de x com y;
    let y = 2;

    console.log(x);
    console.log(y);

    let z = x;
    x = y;
    y = z;

    console.log(x);
    console.log(y);
};

//02 melhor
{    
    let x = 6;    //Trocar valor de x com y;
    let y = 3;

    [x, y] = [y, x];  //Troca utilizando array;
    
    console.log(x);
    console.log(y);
};