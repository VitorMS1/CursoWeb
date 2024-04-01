/*  -Após o conteúdo dos modulos serem exportados, o módulo do cliente é possível
     requisitar esses módulos, amazenando-os em uma vairável; */

const moduloA = require('./moduloA');
const moduloB = require('./moduloB');
const moduloC = require('moduloC'); //Está em node_modules e pode ser acessado aqui pelo index, mas não se recomenda;
const moduloD = require('./moduloD'); //Aqui acontece o mesmo mas em outra pasta, sendo melhor;
//Caso o arquis seja .js, não é preciso informar o ".js", caso seja outro, é;

console.log("Objeto do A: ", moduloA.mensagemA1);
console.log("Objeto do B: ", moduloB.mensagenB1);
console.log("Objeto do C: ", moduloC.mensagenC1);
console.log("Objeto do D: ", moduloD.mensagenD1);
