
/*-------------- Declarando uma função ------------------*/
console.log(`----- Declarando uma função -----`)

{
    function exemploFunction01 (x, y)  
    {
        console.log(x + y);
    };

    /* funtion + nome da função (opcional) + parâmetros + bloco de comandos */

    exemploFunction01(5, 5);

    // Outro exemplo

    function exemploFunction02 (a, b = 1)  //É possível passar um valor padrão para o parâmetro;
    {
        return (a * b);
    }

    console.log(exemploFunction02(5));

    //É também possível armazenar uma função dentro de uma variável, isso se chama "function expression";

    const exemploFunctionVar = function (x, y) {console.log(x+y)} 
    //Nessa caso a função pode ser anonima, apenas: function + parâmetro + bloco;
 
    exemploFunctionVar(2,3);

    //É também possível unir ambos, e armazenar uma função nomeada em variável - "named function expression"; 
    const exemploFunctionVar02 = function (x, y) {console.log(x+y)} 

    //Dessa forma facilita debugar o código, por conta da função possuir uma identificação;
    //Mas, não é uma sintaxe comumente utilizada;

    /*  -Outra diferença na function normal e a function expression (ambas) está na interpretação do Js, onde,
         caso fosse executado o seguinte código:
         
         console.log(somar(1, 2));
         console.log(subtrair(5, 2));

         function somar (a, b) {return a + b};
         let subtrair = function (a, b) {return a+ b};
         
         A função somar seria exibida no console, pois, o interpretador do Js inicialmente cria as funções declaradas
         normalmente, para só então executar o console.log(). Isso já não acontece com a função subtrair, pois as 
         funções declaras por function expresssion não são interpretadas dessa forma; */

    let objetoEx = 
    {
        Funcao01: function(a, b){console.log(a+b)},
        funcao02(x, y) {console.log(x+y)} 
    }

    objetoEx.Funcao01(8, 8);
    objetoEx.funcao02(9, 9);

    //Também possível passá-las como atributo de um ojeto, seja normalmente com par chave-valor, ou da segunda maneira;
}

/*-------------- Function arrow ------------------*/
console.log(`\n----- Function arrow -----`)

{
    // Outra forma de se criar funções

    const boasVindas = nome => `Seja Bem-Vindo ao sistema ${nome}!`
    console.log(boasVindas("Vitor"));

    const aa = a => console.log(a)
    aa("arroz");

    /*  -Funções arrow são declaradas com parâmetro + => + bloco de códido;
        -Elas podem ser usada para simplificar o uso de funções basicas; 
        -Os comandos da função podem ser escritos sem as {} em comandos de simples de 1 linha,
        e naturalmente serão um return; 
        -Parâmetros únicos também podem ser escritos sem os (); 
        -É possível passar nenhum parâmetro usandio () vazios, ou _ (recomenda-se fazer com parênteses vazios) */

    const equacaoSimples = (x, y, z = 4) => { return (x * (y / z) - y);}
         
    console.log(equacaoSimples(5, 10));

    /*  -Como havia mais parâmetro, foi necessário adicionar os ();
        -Como as {} foram adicionadas, foi necessário informar o return  */

    //Em objeto

    const pessoal =
    {
        nome: "Vitor",
        idade: 20,
        printarIdade: function () {console.log(this.idade)},
        printarNome() {console.log(this.nome)}
    }

    pessoal.printarNome()
    pessoal.printarIdade()

    /* -Em um objeto é possível criar uma função normalmente, com um par chave e valor,
        ou apenas criar uma função não anôminima diretamente; */
}

/*-------------- Parâmetros variáveis ------------------*/
console.log(`\n----- Parâmetros variáveis -----`)
{
    function soma ()
    {
        let resultado = 0;
        for (i in arguments)
        {
            resultado += arguments[i];
        };

        return resultado;
    };

    console.log(soma(2, 1, 8, 9, 10));

    /*  -Esse meio permite declarar funções de forma que seus parâmetro sejam variáveis;
        -Não delcarando nenhum parâmetro na criação da função. Em seguida criando um for que
         percorra todos o índices do array arguments, que armazena todos os argumentos que foram
         passados para a função; */

    //Outra forma é utilizando ... nos parâmetros:

    function abc (...parametros)
    {
        console.log(parametros);   
    }

    abc(154, 686, 1256);

    /*  -Esse método permite passar parâmetros de forma variável, e,
         de maneira que seja facil acessá-los posteriormente, pois, 
         dessa vez foram declarados; */
}
