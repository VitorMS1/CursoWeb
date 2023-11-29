{
    /* Diferença entre armazenar o valor e 
    armazenar o endereço de momória onde o valor ser encontra*/

    // Variáveis primitivas da linguagem armazenam o próprio valor atribuído;

    let a = 1;
    let b = a;
    b = 2;

    console.log(a, b)

    /* Nesse caso, b armazenou o valor de a, de froma independente.
    Assim, é possível alterar a sem interferir em b, pois são dados armazenados separadamente */

    // Já variaveis de objetos armazenam o endereço de memoria dos valores;
    
    let x = {id: 1, nome: "aaaa"};
    let y = x;
    y.nome = "bbbb";

    console.log(x, y)

    /* Nessa caso, y armazenou apenas o mesmo endereço contido em x. Ou seja,
    não armazenou de fato os valores do objeto x, e sim, o endereço onde se encontram.
    Dessa froma, ao alterar o valor com o y, ele também e alterado no x */
}
{
    /*-------------- Operadores básicas ------------------*/

    //Unários
    
        /*Operadores unários possuem apenas um valor para trabalhar (operando). EX: */
        
        let a = 2;
        let b = 3;

        a++ //++x ou x++, incrementa 1 ao valor da vairável;
        --b //--x ou x--, decrementa1 ao valor da variável;
        
        //Escrevendo o incremento ou decremento de maneira prefixada (antes da variável), ele possui maior prioridade matemática;

    //Binários

        /*Operadores binários possuem apenas dois valores para trabalhar (operandos). EX: */

        a + b; //Adição;
        a - b; //Subtração;
        a * b; //Multiplicação;
        a / b; //Divisão
        a % b; //Operação de modulo (resto da divisão);

        b += a;  //Adiciona: b = b + a
        b -= a;  //Retira: b = b - a
        b *= a;  //Multiplica: b = b * a
        b /= a;  //Divide: b = b / a
        b %= a;  //Operação de módulo(Resto): b = b % a

    //Ternários

        /*Operadores ternários possuem apenas três valores para trabalhar (operandos). EX: */

        const venda = valor => valor >= 7 ? "Vendido" : "Não vendido"
        
        /*  -Nese caso, há três partes. valor >= 7 (retornará um true ou false), representa
            uma relação binária, o seu resultado irá passar por um condição em que, se verdadeiro
            retornará (return) "vendido" do contrário retornará não vendido (essa condição poderia ser
            substituída por um if...else);
            - "?" representa um if na função arrow, ":" um else; */

        console.log(venda(1)); 

    //Relacionais

        /* Realiza comparações entre os valores, e retorna um boolean (true ou false); */

        console.log("1-", 1 == "1");  // == verifica se os valores são iguais (apenas um =, faz uma atribuição de valores);
        console.log("2-", 1 === "1");  // === verficia se os valores são estritamente iguais, considera também o tipo;
        console.log("3-", 1 != "1");  // === verficia se os valores são diferentes;
        console.log("4-", 1 !== "1");  // === verficia se os valores são estritamente diferentes, considera também o tipo;

        console.log("5-", 2 > 2);   // x > y, x maior que y;
        console.log("6-", 2 < 2);   // x < y, x menor que y;
        console.log("7-", 2 >= 2);  //x >= y, x maior que ou igual a y;
        console.log("8-", 2 <= 2);  // x <= y, x menor que ou igual a y;

        const d1 = new Date (0);
        const d2 = new Date(0);

        console.log("9-", d1 == d2, d1 === d2);  //Com datas ele irá cosiderar falso, pois estará comparando dois endereços de memória diferentes;
        console.log("10-", d1.getTime() == d2.getTime(), d1.getTime() === d2.getTime()); //nesse caso será verdadeiro, pois com getTime(), irá pegar o valor da date e compará-los;

        /* Recomenda-se normalmente utilzar o estritamente igual (===), para evitar erros por misturas com diferentes tipos; */

    //Lógicos

        /* Operadores lógicos seguindo a tabela verdade */

        function compras(trabalho01, trablaho02)
        {
            const comprarCarro = trabalho01 && trablaho02 ;     // && operador para um "e" lógico (conjunção);
            const comprarPizza = trabalho01 || trablaho02;      // || operador para um "ou" lógico (disjunção); 
            const comprarBicicleta = trabalho01 != trablaho02;  // != (negação ou igual) utilizado como recurso para replicar um "ou" exclusivo lógico (disjunção exclusiva);
            const serSaudavel = !comprarPizza;                  // ! operador para um "não" lógico (negação);

            console.log(` Comprei um carro: ${comprarCarro} \n Comprei uma pizza: ${comprarPizza} \n`, 
            `Comprei uma bicicleta: ${comprarBicicleta} \n Estou saldável: ${serSaudavel}`);
        }

        compras(false, false);

        //Outro exemplo 01

        function pontos(prova01, prova02)
        {
            if(prova01 && prova02 == true) {console.log("Parabéns, você passou de ano!")}
            else 
                if(prova01 || prova02 == true) {console.log("Você precisa fazer a terceira prova.")}
            else {console.log("Você repetiu de ano.")};
        };

        pontos(false, true);
        
        //Outro exemplo 02
        
        function vida(carreira, relacionamento)
        {
            if(carreira && relacionamento == true) { console.log("Parabéns, você está rico e casado!!")}
            else 
                if((carreira != relacionamento)&&carreira == true) {console.log("Você tem uma carreira próspera, mas azar no amor")}
            else 
                if((carreira || relacionamento)&&relacionamento == true) {console.log("Você tem um bom casamento, mas sua carreira é um desastre")}
            else {console.log("A sua vida não está fácil, mas não desista!!")};
        };

        vida(true, false);
}
