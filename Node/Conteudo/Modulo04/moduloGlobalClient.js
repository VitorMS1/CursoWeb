/*  -É possível também declarar um objeto no módulo global,
     podendo então ser diretamente aceessado de todos os módulos
     mesmo não tendo sido exportado propriamente;
    -Então, esse método não é muito recomendado, mas, pode ser
     utilizado como recurso para casos específicos; */

require("./moduloGlobal");

console.log(objetoGlobal.mensagem);


//Dessa maneira esse atributo pode inclusive ser alterado por qualquer módulo;
objetoGlobal.mensagem = "mudei";
console.log(objetoGlobal.mensagem);

//Uma forma de contronar isso seria com o freeze;