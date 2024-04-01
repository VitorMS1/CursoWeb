/*  -Em node, módulos importados possuem cahce, ou seja,
     caso queria criar duas variáveis com o mesmo módulo, uma
     irá interferir na outra, logo, se fizer alguma alteração em uma,
     a outra também será alterada;
    -Exemplificando: */

    //Chamando o modulo duas vezes;
    const moduloCache01 = require("./moduloComCache");
    const moduloCache02 = require("./moduloComCache");

    console.log("Com cache antes: ", moduloCache01.valor, moduloCache02.valor);
    
    //Alterando;
    moduloCache01.aumenta();
    moduloCache01.aumenta();
    
    //Ambas alteradas;
    console.log("Com cache depois: ", moduloCache01.valor, moduloCache02.valor);

    /*  -Para contornar isso, é possóvel exportar uma função factory ao invés de
         diretamente o objeto;
        -Por retornar uma função, é importante colocar () ao importar o módulo (IIFE),
         para que invoque a função e funcione;
        -Exemplificando: */

    const moduloSemCache01 = require("./moduloSemCache")();
    const moduloSemCache02 = require("./moduloSemCache")();

    console.log("Sem cache antes: ", moduloSemCache01.valor, moduloSemCache02.valor);
    
    moduloSemCache01.aumenta();
    moduloSemCache01.aumenta();
    
    //Apenas a 01 alterada
    console.log("Sem cache depois: ", moduloSemCache01.valor, moduloSemCache02.valor);
    