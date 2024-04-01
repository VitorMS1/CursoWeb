
/*-------------- Algumas dinâmicas ------------------*/
console.log(`\n----- Algumas dinâmicas -----`)

{
    //para passar essas variáveis como atributos do objeto:

    let a = 1, b = 2, c = 3;
    
    const objVarAntigo = {a: a, b: b, c: c};
    const objVarNovo = {a, b, c};   //O Js já reconhece
    console.log("Antigo: ", objVarAntigo, "\nNovo: ", objVarNovo);

    //Também é possivel passar os valores de duas variáveis como par chave-valor:

    const abc = "idade";
    const xyz = 20;

    const varValorAtributo = {};
    varValorAtributo[abc] = xyz;

    console.log("Dinamica: ", varValorAtributo);

    //ou na notação literal

    const varValorAtributo02 = {[abc]: xyz};
    console.log("Literal: ", varValorAtributo02);

    //Funções como atributos

    const objFunc = 
    {
        func: function()
        {
            console.log("Função antiga, aaaaaa")
        },

        func2()
        {
            console.log("Função nova, uhuull")
        }
    };

   objFunc.func();
   objFunc.func2();
}
   
   /*-------------- Funções e recursos Object ------------------*/
   console.log(`\n----- Funções e recurso Object -----`)

{
    const objEx01 =
    {
        key01: "valor 01",
        key02: "valor 02",
        key03: "valor 03"
    };
    
    //Keys e values
    console.log("Keys: ", Object.keys(objEx01));  //Permite pegar apenas as keys (identificadores) dos atributos do objeto;
    console.log("Values: ", Object.values(objEx01)); //Permite pegar apenas os values (valores) dos atributos do objeto;

    //entries
    console.log("Entries: ", Object.entries(objEx01)); //Divide o objeto em subarrays de par chave-valor;
    
    //defineProperty
    Object.defineProperty(objEx01, "valorSecreto", 
    {
        enumerable: false,  //Listável ao printar objeto;
        writable: false,    //Alterável;
        value: " Valor super secreto" //valor;
    });
    /*  -Permite definir atributos com propriedades, dando mais controle sobre ele; 
        -Sintaxe: Object.defineProperty(Nome do objeto, "Nome do atributo", {objeto com propriedades}); */
        console.log("defineProperty: ", objEx01); //Não é listável;
        objEx01.valorSecreto = "Mudei"; //Não é alterável;
        console.log("Valor secreto: ", objEx01.valorSecreto);

    //Assign
    const objFeed1 = {a: 1, b: 2};
    const objFeed2 = {c: 3, key01: 10, a: 5, func(){console.log("arroz")}};
    /*  -Junta/concatena os objetos passados como parâmetro;
        -De froma que o primeiro objeto passado será o destino, e recebera os dados dos demais; 
        -Caso haja um atributo de mesmo nome, o último passado será o válido (isso chama-se sombreamento, ou, shadowing); */
    Object.assign(objEx01, objFeed1, objFeed2);
    console.log("Assign: ", objEx01);

    //Object.preventExtensions - trava expansão
    const objPrevExt = Object.preventExtensions({a: 12, b: 13, c: 14});  //criado objeto travado;
    objPrevExt.d = 14;   //tentando criar novo, sem sucesso;
    objPrevExt.b = 0;    //alterando, permitido;
    delete objPrevExt.c; //deletanado, permitido;
    console.log("preventExtensions: ", objPrevExt, Object.isExtensible(objPrevExt));

    //Object.seal - trava expansão e exclusão
    const objSeal = {a: 1, b: 2, c: 3};
    Object.seal(objSeal);   //Selando objeto;
    objSeal.d = 20;         //Tentando adicionar, sem sucesso;
    delete objSeal.c;       //tentando deletar, sem sucesso;
    objSeal.c = "alterado"; //alterando, permitido;
    console.log("seal: ", objSeal, Object.isSealed(objSeal));

    //Freeze;
    const objFreeze = {a: 1, b: 2, c: 3};
    Object.freeze(objFreeze);     //o objeto foi congelado, impedindo que seus atributos possam ser alterados;
    objFreeze.key01 = "Roxo";     //tentando mudar atributo, sem sucesso;
    objFreeze.idade = 25;         //tentando criar novo, sem sucesso;
    delete objFreeze.key01;       //tentando deletar atributo, sem sucesso;
    console.log("Freeze: ", objFreeze, Object.isFrozen(objFreeze));  //Continua igual;
}

/*-------------- Get e Set ------------------*/
console.log(`\n----- Get e Set -----`)

{
    /*  -Em Js, não há como propriamnete tornar o atributo de um objeto em 
         privado ou público como em outras linguagens, mas, há como "simular"
         esse comportamento, deixando um atributo visível apenas em seu escopo, e
         utilizando metodos get e set para acessá-lo; */

    const crescimentoGetSet =
    {
        _atributo: 1, //um _ no nome do atributo não torna ele privado, mas é concenso entre programadores;
        get atributo(){ return this._atributo++},
        set atributo(atributo) 
        {
            if(atributo > this._atributo)
            {
                this._atributo = atributo;
            }
        }
    }

    console.log(crescimentoGetSet.atributo, crescimentoGetSet.atributo);
    crescimentoGetSet.atributo = 10;
    console.log(crescimentoGetSet.atributo, crescimentoGetSet.atributo);

    /*  -Um método get é definido no objeto, retornando sempre o valor do atributo, porém, incrementado;
        -Em seguida, um metodo set é definido, onde o atributo receberá o novo valor apenas caso o valor 
         passado como parâmetro seja, maior que o já existente;
        -Dessa forma, quando for chamado o atributo pelo nome padrão (sem o _ antes), na verdade o método
         get estará sendo chamado, trazendo consigo os procedimentos de sua função (no caso um incremento ++);
        -Da mesma forma irá ocorrer com o método set, ao tentar definir um valor para o atributo utilizando o seu
         nome padrão (sem o _), na verdade o método set estará sendo chamado (trazendo nesse caso, uma validação if);
        -Essa dinâmica permite tornar mais funcional o ato de chamar ou setar um valor para o atributo, possibilitando
         realizar validações ou outros procedimentos;
        -Nesse caso específico, com get e set, o JS permite colocar o mesmo identificador nas funções (nessa caso, "atributo")
         sem que hajam erros;*/
}