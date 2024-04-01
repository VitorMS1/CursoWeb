/*  -A maneira mais utilizada para exportar do módulo é um pouco diferente,
     ao invés de declarar atributos dentro do objeto this já existente,
     nesse método ele é reescrito; */

    module.exports = 
    {
        mensagenB1: "Esse é melhor",
        numeroB1: 1080,
        mensagenB2: "numero b, e letra 2"
    }

    console.log(module.exports)
    //Objeto reescrito;