
   /*-------------- Prototype/Herança 01 ------------------*/
   console.log(`\n----- Prototype/Herança 01 -----`)

{
    /*  -Em Js, assim como em outras linguagens de programação orientadas a objeto, é possível definir a herança de
         um objeto, isso é, definir quem será o objeto pai (super objeto) de um objeto específico, de forma que, o
         objeto filho herdará todos os elementos do pai. Porém, esses elementos podem ser reescritos nos objetos filho,
         se tornando válidos para ele, em seu nível de encapsulamento (os filhos do filho receberiam o elemento reescrito). Essa
         dinâmica se chama sombreamento (shadowing);
        -Esse recurso em Js se chama protótipo (prototype);
        -Por padrão, caso não definido, o prototype irá apontar para o object.protype. Esse se trata do objeto pai
         geral, de todos os objeto. Esse por sua vez, não possui um prototype;
        -Essa dinâmica persiste mesmo se, um objeto for definido dentro de outro;
        -O termo reservado para interagir com o prototype é "__proto__"; */

    const objEx01 = { objEx02: {} };
    console.log("Prototype padrão 1: ", objEx01.__proto__);
    console.log("Prototype padrão 2: ", objEx01.objEx02.__proto__);

    //Definindo prototype:

    //Object.prototype.atributo00 = 0;  //É possível também definir no super objeto geral, mas não se recomenda, pois, é uma alteração global;
    const objAvo = {Avo: "João"};
    const objPai = {Pai: "Elias", __proto__: objAvo};
    const objFilho = {Filho: "Marcelo", __proto__: objPai};

    console.log("Definindo prototype 1: ", /*objFilho.atributo00,*/ objFilho.Avo, objFilho.Pai, objFilho.Filho)
    console.log(`Definindo prototype 2: Filho->${JSON.stringify(objFilho.__proto__)}, Pai->${JSON.stringify(objPai.__proto__)}, Avô->${JSON.stringify(objAvo.__proto__)}(prototype), ObjPrototype->${Object.prototype.__proto__}`);

    /*  -Com "__proto__: x", o prototype dos objetos pai e filho, foram alterados. Criando uma relação entre eles;
        -Dessa forma os atributos existentes nos pais, foram todos herdados no objeto filho; */

    //Aplicação mais complexa/realista:

    //Criando um objeto pai
    const carro =
    {
        velocidadeAtual: 0,
        velocidadeMaxima: 200,

        acelerar(aceleracao)
        {
            if((this.velocidadeAtual + aceleracao) <= this.velocidadeMaxima)
            {
                this.velocidadeAtual += aceleracao;
            } 
            else
            {
                this.velocidadeAtual = this.velocidadeMaxima;
            }
        }, 

        statusVelocidade()
        {
            return `${this.velocidadeAtual}km/h - ${this.velocidadeMaxima}km/h`
        }
    };

    //Pirmeiro objeto filho
    const palio = 
    {
        modelo: "Palio 2008",
        statusVelocidade()
        {
            return `${this.modelo}: ${super.statusVelocidade()}`    //super. referencia o pai
        }
    };

    //Segundo objeto filho
    const bugatti = 
    {
        modelo: "Bugatti Veyron",
        velocidadeMaxima: 431
    };

    //Outra forma de definir herança
    Object.setPrototypeOf(palio, carro);    //Essa função seta o prototype;
    Object.setPrototypeOf(bugatti, carro);  //Sintaxe: Object.setPrototypeOf(objeto filho, objeto pai);

    //Testando resultados
    palio.acelerar(50);     //Chamando no objeto filho palio, a função acelerar do objeto pai carro;
    console.log(palio.statusVelocidade()); //Chamando o função statusVelocidade pelo filho palio, ela está alterada;

    bugatti.acelerar(500);  //Atributo velocidadeMaxima no objeto filho bugatti foi alterado, permitindo a chegar até o novo limite de 431;
    console.log(bugatti.statusVelocidade());  //Chamando função statusVelocidade mesmo que essa esteja declarada apenas no objeto pai;
}

/*-------------- Prototype/Herança 02 ------------------*/
console.log(`\n----- Prototype/Herança 02 -----`)

{
    //Prototype de função e seus objetos
    
    /*  -Objetos criados a partir de funções possuem um prototype diferente;
        -Ao invés de referenciar o prototype geral de objetos (object.prototype), 
         eles referenciam um prototype próprio da função (nomeDaFunção.prototype); 
        -Logo, já são linkados como filhos dessa função, permitindo alterar atributos
         do que seria o prototype geral delas (nomeDaFunção.prototype), sem realizar uma
         alteração global em todos os objetos, evitando problemas;
        -A função criadora de objetos, por sua vez, irá referenciar o prototype geral
         de funções, o Function.prototype; 
        -E por sua vez, o Function.prototype irá referenciar o object.prototype; 
        -NomeObjetoGerado.prototype -> nomeDaFunção.prototype -> Function.prototype -> Object.prototype -> null  */

    function criarObjeto(){};
    criarObjeto.prototype.nome = "Prototype de criar objeto";
    const obj01 = new criarObjeto;

    console.log(obj01.__proto__)
    console.log(criarObjeto.prototype === obj01.__proto__);
    console.log(criarObjeto.__proto__ === Function.prototype);
    console.log(Function.prototype.__proto__ === Object.prototype);
    console.log(Object.prototype.__proto__ === null);
    
    //Novas funções em prototypes padrão

    /*  -Esse conceito de prototype de funções possibilita novas dinâmicas; */

    console.log(typeof String, typeof Array, typeof Object);

    /*  -Tendo em vista que no Js esses tipos se tratam de functions, concluímos que exista o
         string.prototype, array.prototype e etc;
        -Isso permite com que possamos adicionar funções novas a esses tipos;
        -Cuidado para não criar funções com nomes já existentes, pois isso irá 
         substituir o já existente e possivelmente gerar erros;
        -A exemplo: */

        //Reverte String
        String.prototype.reverte = function ()
        { return this.split('').reverse().join(''); };
        console.log("Invertido: ", "Arroz e frango".reverte())
        
        //Primeiro elemento array
    Array.prototype.primeiroElemento = function()
    { return this[0]};
    console.log("Primeiro elemento: ", [0, 12, 24].primeiroElemento());
}

/*-------------- Prototype/Herança 03 ------------------*/
console.log(`\n----- Prototype/Herança 03 -----`)

{
    //Object.Create - Outra forma de se fazer
    const pai = 
    {
        nome: "José", 
        idade: 45, 
        corCabelo: "Castanho",
        crescer() {this.idade++}
    };

    const filho01 = Object.create(pai, 
        {
            nome: {value: "Ana", enumerable: true, writable: false},
            idade: {value: 10, enumerable: true, writable: true},
            pai: {value: pai.nome, enumerable: true, writable: false}
        });

    /*  -O Object.create() permite criar um onjeto já o relacionando ao pai, além de permitir controlar
         as propriedades dos atributos;
        -Sua sintaxe: Object.create(objeto pai, {atributo: {propriedade: valor}}); */

    console.log(filho01)
    filho01.crescer();
    console.log(filho01);
    console.log(`A cabelo de ${filho01.nome} é ${filho01.corCabelo}`);

    //Verificando dono propriedade
    for (let chave in filho01)
    {
        filho01.hasOwnProperty(chave) ? 
        console.log(chave) : console.log(`Herdado: ${chave}`);
    }

    /*  - y.hasOwnProperty(x) identifica se o x pertence ao y ou não (boolean);
        -Nesse caso, se a chave pertence ao objeto filho01 ou não;
        -Caso pertença, printa a chave apenas (primeiro console.log), caso não pertença
         printa o templateString (segundo console.log); */
}

/*-------------- Classe ------------------*/
console.log(`\n----- Classe -----`)

{
    /*  -Em Js há também o termo class, que se trata também de um function construtora,
         porém, como uma diferença na sua sintaxe;
        -Em uma classe, há o bloco constructor, que se trata do construtor do objeto que
         será gerado. Ou seja, é nesse bloco em que estarão os elementos do objeto (o conteúdo
         da função construtora, porém, na classe ele estará somente dentro desse bloco constructor); */

    class carteira
    {
        constructor(donoNome)
        {
            this.donoNome = donoNome;
            this.saldo = 0;
            this.lancamentos = [];
        }

        adicionarLancamentos(...lancamentos) 
        {
            lancamentos.forEach((l) => {this.lancamentos.push(l); this.saldo += l.valor});

        }
    }

    class lancamentos
    {
        constructor(nome, data, valor)
        {
            this.nome = nome;
            this.data = data;
            this.valor = valor;
        }
    }

    let carteira01 = new carteira("Pedro");
    carteira01.adicionarLancamentos(new lancamentos("Luz", "18/02/2023", -150));
    carteira01.adicionarLancamentos(new lancamentos("Água", "18/02/2023", -75));
    carteira01.adicionarLancamentos(new lancamentos("Salário", "18/02/2023", 1300));
    console.log(carteira01);

    //Herança

    /*  -Heranças com class funcionam igualmente a uma função, afinal se trata de 
         uma function para o Js. Porém, a sintaxe é diferente; */

    class produto 
    {
        constructor(tipo, marca = "Genérico",  modelo, preco = 0)
        {
            this.tipo = tipo;
            this.marca = marca;
            this.model = modelo;
            this.preco = preco;
        }
    }

    class notebook extends produto
    {
        constructor(marca, modelo, preco, processador, tipo = "Notebook")
        {
            super(tipo, marca, modelo, preco)
            this.processador = processador;
        }
    };

    class celular extends produto
    {
        constructor(marca, modelo, preco, camera, tipo = "Smartphone")
        {
            super(tipo, marca, modelo, preco)
            this.camera = camera;
        }
    };

    const dellG15 = new notebook("dell", "G15", 4500, "i5 12500h");
    const S21 = new celular("Samsung", "S21", 2700, "Sony IMX555 12Mpx")
    console.log(dellG15);
    console.log(S21);
}
