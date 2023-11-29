/*  -Para passar parâmetros de uma função importada de outro
     módulo, basta passá-los ao chamar a função, após importá-la; */

const boasVindas = require("./moduloFuncParam")("Vitor", "Joãozinho", "Fulano");

console.log(boasVindas);