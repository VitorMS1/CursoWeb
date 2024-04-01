
/*-------------- Declarando um objeto ------------------*/
console.log(`----- Declarando um objeto -----`)

{
    //forma dinâmica;
    const notebook = {}; 
    notebook.modelo = "Dell G15"; //Declarando um atributo do objeto;
    notebook.preco = 6500;
    notebook['descricao do produto'] =      //Outra forma de declarar um atributo (essa maneira permite separar categoria);
    "Notebook gamer de alta performance";   //Recomenda-se não declarar dessa forma;    
    
    console.log(notebook)

    // Outra forma de declarar - notação literal (não é Json)

    const produto01 = 
    {       
        id: 1,
        tipo: 'notebook',
        detalhes: notebook    //É também possivel colocar objetos dentro de outros objetos;
    };

    // Outra forma de declarar - notação literal 2

    console.log(produto01);

    const produtos = 
        {
            produto01:   //O objeto já existente colocado dentro de outro objeto, se torna um objeto proprio, logo pode ser alterado;
                {
                    id: 1,
                    tipo: 'notebook',
                    detalhes: 
                        {
                            modelo: 'nitro 5',
                            preco: 5000
                        }
                },

            produto02:
                {
                    id: 2,
                    tipo: 'geladeira',
                    detalhes: 
                        {
                            modelo: 'Samsung r35',
                            preco: 4000
                        }
                }
        }

    console.log(produtos);

    //Através de uma classe/função;

    const objFunConstrutora = new Object;
    objFunConstrutora.nome = 'Elefante';

    // Por meio do "new", é possível instanciar uma classe, criando assim um novo objeto;


    console.log(objFunConstrutora, typeof objFunConstrutora, typeof Object, typeof new Object);

}

/*-------------- Classes / Outras formas ------------------*/
console.log(`\n----- Classes / Outras formas -----`)

{
    /*  -É possível também, criar sua própria classe/função para instanciar o seu objeto, podendo
         já definir atributos e métodos que todos os objetos instanciados por essa classe terão; 
        -Em JS a classe de um objeto é uma função, logo pode ser criada com a sintaxe
         de uma função (normal/arrow ou factory) ou com o comando class; */

    //Com function padrão - função construtora;
    function pedidos(id, quantidade, preco)
    {
        this.id = id;
        this.quantidade = quantidade;
        this.preco = preco; 
    };

    const pedido01 = new pedidos(1, 5, 15.99);    //new + class/function = instancia novo objeto;
    console.log("Função construtora: ",  pedido01); //pedido1 é objeto e pedidos uma função;

    //Com factory function;
    function pedidosFactory (id, quantidade, preco)
    {
        return {
            id, 
            quantidade,
            preco
        };
    };

    const pedido02 = new pedidosFactory(2, 3, 54.90);
    console.log("Função factory: ", pedido02);

    //Com class(Que em Js, se trata de uma function);
    class clientes
    {
        constructor(nome, altura)
        {
            this.nome = nome;
            this.altura = altura;
        };
    };
    const cliente01 = new clientes("Chitãozinho", 1.70);
    console.log("Class: ", cliente01); //Em Js, classe clientes ainda é uma function;

    /*  -Há também outras formas de se criar; */

    //Com Object.create()

    const objCreate = Object.create(null);
    objCreate.nome = "Xororó";
    console.log("Object.create: ", objCreate);

}

/*-------------- JSON ------------------*/
console.log(`\n----- JSON -----`)

{
   /*   -JSON apesar do nome, se trata de um modelo utilizado para interoperabilidade entre sistemas;
        -Ele consiste em um formato textual genérico, simples e de fácil interpretação para 
         o computador. Não carrega consigo nenhuma característica de sistemas específicos, podendo 
         então, ser utilizado por diferentes linguagens e tecnologias;
        -Isso o torna muito utilizado para comunicação entre sistemas, como a exemplo, web services ou 
         modulos de um mesmo sistema. Também é amplamente utilizado parsa armazenar dados, como, as 
         configurações internas de um sistemas ou dados em bancos de dados (assim como no mongoDB); */

    //Transformando objeto em JSON | objeto -> Json
    const objJson01 = {a: 10, b: 15, c: 47, func(){console.log("aaa")}};
    console.log(JSON.stringify(objJson01));

    /*  -O objeto foi transformado em uma string no formato Json;
        -Funções não são transoformadas, pois, o Json se trata apenas
         de um formato de dados para serem compartilhados; */

    //Transformando Json para objeto | Json -> Objeto
    const objJson02 = JSON.parse('{"inteiro": 10, "flutuante": 1.5, "String": "Hoje é sexta!", "objeto": {"boolean": true}}')
    console.log(objJson02);

    /*  -Na sintaxe, o conjunto é aberto com aspas simples (''), e então,
         aberto como um objeto comum com {}. Em seguida, são individualmente
         delimitados com aspas duplas o nome da cada atributo do objeto (suas keys/chaves),
         da mesma forma, strings também precisam ser separadas com aspas duplas. De resto,
         segue a sintaxe de um objeto comum;  */
}
