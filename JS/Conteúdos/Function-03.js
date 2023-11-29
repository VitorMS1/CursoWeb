
/*-------------- Function como classe ------------------*/
console.log(`----- Function como classe -----`)
{
    /*  -Como em outras linguagens OO (orientadas a objetos), no Js é possível criar uma classe
         para o objeto. Porém, mesmo possuindo o termo Class, em Js a classe se trata de uma function;
        -Assim, é possível criar uma função mesmo sem usar o termo class (porém com algumas diferenças),
         esse tipo de função se chama função construtora (constructor function);
        -A exemplo, uma classe de carro;  */

    function Carro(velocidadeMaxima = 200, aceleracao = 5)
    {
        let velocidadeCarro = 0

        this.acelerar = () =>
        {
            if((velocidadeCarro + aceleracao) <= velocidadeMaxima)
            {
                velocidadeCarro += aceleracao;
            }
            else
            {
                velocidadeCarro = velocidadeMaxima;
            };
        };
        
        this.getVelocidadeCarro = () => velocidadeCarro;
    };

    /*  -Aqui uma função que servirá como classe para carro é criada;
        -Seus atributos de velocidade maxima e aceleração são passados como parâmetro,
         já com um valor padrão para caso não seja alterado;
        -A variável que será outro atributo velocidadeCarro é criada dentro da função, não podendo ser acessada
         de fora, ou seja, sendo um método privado da classe;
        -Outro atríbuto é criado, mas, dessa vez com o this, podendo ser acessado de fora da função, ou seja,
         se tornando um método público. Esse atributo recebe uma função que aumenta a velocidade do 
         carro (somando a aceleração) caso não tenha atingido a velocidade máxima ainda;
        -Por fim, outro método público é criado, esse para que o atributo privado velocidadeCarro possa ser obtido;  */

    const palio = new Carro;
    palio.acelerar();
    console.log(palio.getVelocidadeCarro());

    const bugatti = new Carro(400, 30);
    bugatti.acelerar();
    bugatti.acelerar();
    console.log(bugatti.getVelocidadeCarro());

    /*  -Então, criando variáveis que recebam um new Carro,gerando então, um objeto, e utilizando os seus métodos para manipulá-lo;
        -Assim como a dinâmica de um objeto em OO; */

    console.log(typeof Carro, typeof palio, typeof bugatti);   //Para melhor demonstração;


    //Função factory

    /*  -Outra dinâmica possível para essa implementação, seria com a criação de uma chamada função "factory",
         isto é, uma função capaz de fabricar algo. No caso, um objeto, passando os parâmetros informados ao chamar a função,
         como os atributos do objeto, assim como uma classe; */

    const produtoFactory = (tipo, marcaP, modelo, preco) =>
    {
        return {
            tipo,
            marca: marcaP || "Genérico",
            modelo,
            preco,
            desconto: 0.15
        }
    }

    console.log(produtoFactory("celular", "Samsung", "S21", 3000));
    console.log(produtoFactory("Tablet", 0, "X", 900));

    //Esse tipo de função possui algumas dinâmicas diferenstes da função construtora e class, pricipalmente no uso do this;
}

/*-------------- Function IIFE ------------------*/
 console.log(`\n----- Function IIFE -----`)

{
    /*  -IIFE ou Immediately Invoked Function Expression, se trata de uma função auto invocada, propriamente
         uma function expression;
        -Essa dinâmica é interessante para implementações em browser, pois evita a utilização do window (objeto global),
         consequentemente evitando problemas por compartilhamento de variáveis, fugindo desse escopo abrangente;
        -No node esse problema não é tão presente, pois, utiliza módulos diferentes ao invés de um unico como no browser;*/

    (function() {

        console.log("Bloco de código a ser executado")

    })()

    /*  -É normalmente declarada dessa forma, criando uma function anômima dentro de parênteses, e, 
         em seguida, abrindo e fechando parênteses vazios (assim, já chamando a função imediatamente); */
}

/*-------------- Call e apply ------------------*/
console.log(`\n----- Call e apply -----`)

{

    // -Existem outras formas de se chamar uma função, através do call e do apply;

    function precoFinal (imposto = 0.10, moeda = "R$", )
    {
        return `${moeda} ${this.preco * (1 - this.desconto) * (1 + imposto)}`
    };

    //Criando uma função que calcule o preço final do produto

    const produto01 =
    {
        tipo: "Celular",
        marca: "Motorola",
        modelo: "Edge 20",
        preco: 2500,
        desconto: 0.15,
        precoFinal
    }

    //Criando um objeto que conterá a função;

    console.log(produto01.precoFinal());
    //Da forma tradicional;
    console.log(precoFinal.call(produto01));
    //Com call
    console.log(precoFinal.apply(produto01));
    //Com apply

    /*  -Com o call e o apply, a função é chamada no contexto do objeto produto01, então poderia ser
         executada mesmo se não houvesse a função precoFinal como um atributo do objeto produto01;
        -Já no meio tradicional, a função é chamada diretamente dentro do objeto produto01;
        -Na sintaxe do call e apply, são passados em seus parâmetros os parâmetros para a própria função
         que será executada, sendo o primeiro por padrão o contexto que a função será executada, e em seguida
         os parâmetros da função propriamente;
        -Para passar múltiplos parâmetros para a função, há um pequena diferença de sintaxe entro o call e o apply; */

        const produto02 =
        {
            tipo: "Laptop",
            marca: "Dell",
            modelo: "G15",
            preco: 2000,
            desconto: 0.10
        }

        //Objeto sem a função, para demonstração;

        console.log(precoFinal.call(produto02, 0.35, "£"));     //Contexto + parâmetros da função chamada;
        console.log(precoFinal.apply(produto02, [0.20, "$"]));  //Contexto + array com parâmetros da função chamada;
}