
/*-------------- Funções "callBack" ------------------*/
console.log(`-----  Funções "callBack" -----`)

{
    const cardapio = ['Macarrão', 'Frango', 'Salada'];

    function imprimirCardapio (comida, indice) 
    {
        console.log(`${indice +1} - ${comida}`);
    }

    cardapio.forEach(imprimirCardapio);

    /*  -Nesse sistema, um array é criado com os pratos do cardápio;
        -Em seguida, um função que printa esses pratos junto aos seus índices;
        -Então é usado a função ForEach(), que percorre todos os elementos de um array,
         e para cada (for each) elemente dispara um evento, executando o comando passado 
         como parâmetro, o chamando de volta (por isso, callback);
        -Por padrão, na excução do ForEach o primeiro parâmetro passado para a função imprimirCardapio chamada,
         é o valor do elemento do array, e a segunda seu índice; */

    //Simplificando com arrow;

    cardapio.forEach((comida, indice) => console.log(`${indice +1} - ${comida}`));

    //A exemplo, caso deseje criar uma array que contém apenas notas baixas do array notas;
    const notas = [0, 9, 8.8, 7.5, 5.7, 4.5];

    //Um meio tradicional seria:

    let notasBaixas01 = [];
    for(let i in notas)
    {
        if(notas[i] < 6)
        {
            notasBaixas01.push(notas[i])
        }
    }

    console.log(notasBaixas01);

    //Com callBack:

    let notasBaixas02 = notas.filter(nota => nota < 6);
    console.log(notasBaixas02)

    /*  -A função filter() irá retornar todos os valores que retornarem true com
         base na função passada no parâmetro, filtrando o array;
        -Nesss caso, uma função que retorna todos os valores menores que 6; */

    /*  -Para compreesão do conceito de callback e exemplificação de um uso do browser, abrindo o
         console do browser e executando o seguinte código: 

         document.getElementsByTagName('body')[0].onclick = function (e) { console.log("Ocorreu um click (evento)"); };

         irá criar um observador que a cada evento (no caso um click no body) irá executar a função, a chamando de volto; */
}

/*-------------- This ------------------*/
console.log(`\n----- This -----`)

{
    /*  -O this é uma palavra que referencia o "dono" de um determinado código no contexto da sua execução, 
         identificando o "pai" que armazena aquele comando. A exemplo em Java, por ser uma línguagem orientada a objetos,
         o this vai se referir ao objeto pai porta o código executado. Em Js, esse conceito sofre alterações dependendo de
         como é utilizado; */

    //Função;
    
    function ex1 () {console.log(this === global)}
    ex1()
   
    /*  -Se utilizado no contexto de uma função, o this irá apontar para o objeto global;
        -O global se refere ao repositório central, o objeto geral onde o código estará armazenado;
        -Logo, significa que o this informa que o "dono" dessa function se trata do objeto global;
        -Em node para se referir ao objeto global se usa a palavra reservado "global", já
         no browser, esse termo se chama "window"; */

    //Click

    /*  -Já em um contexto de click isso irá mudar, e irá referenciar o lugar onde foi chamado, ou seja, o elemento
         onde o click ocorreu. A exemplo, executando no console do browser os códigos:

         const body = document.getElementsByTagName('body')[0];       //Que irá criar uma variável body, que recebe o body da página;
         function exClick() {console.log(this === body);}             //Que irá criar uma função que printa o resultado da comparação do this com a varável body;
         document.getElementsByTagName('body')[0].onclick = exClick   //Que irá criar uma mecânica em que, ao clicar no body, a função exClick é executada;
         
         Em seguida clicando no body, o console irá retornar true, pois, no contexto do click o this referencia o
         elemento que foi clicado, nesse caso, o body da página;    */
    
    //Arrow function

    /*-Porém, no contexto de uma função arrow, o this permanece fixo. A exemplo, executando em seguida no console do browser os códigos:
         
        const exClickArrow = () => console.log(this === window, this === body);  //Que irá criar uma função artow que printa o resultado da comparação do this com  o window (global) e a varável body;
        document.getElementsByTagName('body')[0].onclick = exClickArrow          ////Que irá criar uma mecânica em que, ao clicar no body, a função exClickArrow é executada;
    
        Em seguida clicando no body, o console irá retornar true para a comparação com o window, e false para a comparação com
        o body, pois diferente de uma função comum, em uma função arrow o this é fixo independente do contexto em que a função
        for chamada. Nesse caso, a referencia do this é definida no contexto em que a função foi criada, ou seja, no momento em que
        a função exClickArrow foi criada o this referenciava o objeto global, e essa relação irá se manter independentemente do
        contexto em que a função for chamada, o this de uma função arrow nunca irá variar. Além da sintaxe reduzida, essa pode ser uma 
        característica vantajosa das funções arrow, que incentiva o seu uso; */

    //Bind

    const objExemplo = 
    {
        mensagem: "Olá pessoal!",
        funcEX() 
            {
                console.log(this.mensagem, this === objExemplo, this === global)
            }
    }

    objExemplo.funcEX();

    /*  -Nesse caso o this se refere ao objeto "objExemplo", pois ele armazena a function "funcEX()"; */

    const printarMensagem = objExemplo.funcEX;
    printarMensagem()

    /*  -Quando a função é armazenada em uma variável, o this já não referencia mais ao objeto "objExemplo", e sim,
         ao módulo global novamente, gerando um undefined ao chamar a função;
        -Isso se trata de um conflito em razão do Js ser uma línguagem de múltiplos paradigmas, gerando um desencontro
         entre o OO (Orientado a objetos) e a programação funcional;  */

    const printarMensagem2 = objExemplo.funcEX.bind(objExemplo);
    printarMensagem2()

    /*  -Nesse contexto surge como solução a função bind();
        -Essa função irá determinar a quem o this da função estará se referindo naquele contexto, fixando como na arrow;
        -Nesse caso, o bind passa para a variável printarMensagem2 que o this da função que ela está recebendo, se referem ao objeto "objExemplo"; */

    //Alternativa com "Self"

    const qtd = 0; //para controlar o número de execuções

    function tempoERRADO()
    {
        this.dia = 0;
        setInterval(function()
                            {
                                if (this.dia < qtd)
                                {
                                    this.dia++;
                                    console.log(`Dia: ${this.dia}, tempoERRADO`);     
                                }

                            }, 2000)
    }

    new tempoERRADO;

    /*  -Esse código cria uma função que dispara a função setInterval();
        -A função set interval é uma função padrão da línguagem, que executa um determinado código (passado como o
         primeiro parâmetro) a cada determinado intervalo de tempo (passado como o segundo parâmetro), por padrão informado em milissegundos;
        -Nesse caso, a cada 2 segundos (2000ms) irá executar uma função anônima que incrementa a variável dia e printa no console;
        -Porém, por ser uma função comum e estar sendo chamada em outro lugar (onde a função setInterval() é armazenada, pois é ela quem chama),
         o this já não se refere mais a função pai tempoERRADO(), e sim, ao "dono" da função setInterval(), gerando um NaN;  */
   
    function tempoBind()
    {
        this.dia = 0;
        setInterval(function ()
                            {
                                if (this.dia < qtd)
                                {
                                    this.dia++;
                                    console.log(`Dia: ${this.dia}`, this);   
                                }        

                            }.bind(this), 2000)
    }
     
    new tempoBind;

    /*  -Agora com a função bind() o this é definido o this como o this da função anônima em si, ou seja,
         o tempoBind; */

    function tempoSelf()
    {
        const self = this;
        self.dia = 0;
        setInterval(function ()
                            {
                                if (self.dia < qtd)
                                {
                                    self.dia++;
                                    console.log(`Dia: ${self.dia}`, self)  ;            
                                }
                            }, 2000)
    }

    new tempoSelf;

    /*  -Aqui, é criada um variável (geralmente omeada self) que armazena o this da função pai (logo, o tempoSelf);
        -Desse forma ao se referir ao this na função dentro do setInterval, é possível utilizar o self para fixar o mesmo this; */

        function tempoArrow()
        {
            this.dia = 0;

            setInterval(() => 
                {
                    if (this.dia < qtd)
                    {
                        this.dia++;
                        console.log(`Dia: ${this.dia}`, this)  ;            
                    }
                }, 2000)

        }
    
        new tempoArrow;

    /*  -Por isso se desctacam as funções arrow, que naturalmente já fazem isso;
        -Por curiosidade, se colocada uma função bind() em uma função arrow, o this da
        função arrow ainda não irá ser alterado, pois essa sua característica é mais
        "forte" e ainda se sobressai ao bind();  */

    //Closure

    /*  -Essa dinâmica que ocorre com a função setInterval() ocorre por conta do chamado "closure";
        -Isto é, o contexto em que aquela função está inserida. A função é capaz de armazenar esse 
         contexto, e ele será válido para ela.  */

    const localAtual = "No módulo";

    function closureEx01 () { console.log(localAtual); };
    function closureEx02 () 
    { 
        const localAtual = "Dentro da função"
        closureEx01();
    };

    closureEx02();

    /*  -Nesse caso, a variável localAtual é definida no módulo geral e dentro da segunda função;
        -Mas, mesmo a primeira função sendo chamada dentro da segunda, a mensagem exibida é a da
         variável declarada no módulo geral, pois, no contexto da primeira função aqueça é a variável localAtual; */

    const localAtual02 = "No módulo"

    function closureEx03 ()
    {
        const localAtual02 = "Dentro da função";
        function closureEx04 () { return localAtual02 };
        return closureEx04;
    };

    const testandoClosures = closureEx03();
    console.log(testandoClosures());
    
    /*  -Já nesse caso, no contexto da função 04, o localAtual é o presente dentro da função pai,
         mesmo que tenha sido chamada fora, onde a variável localAtual é outra;
        -Ou seja, mesmo sendo chamada fora em um outro contexto diferente, a função tem consciência do seu próprio
        contexto (closure) onde está armazenada;*/
}

