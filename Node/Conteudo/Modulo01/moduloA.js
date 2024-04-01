/*  -O node trabalha com um sistema de modulos, encapsulando pedaços
     de códigos em arquivos separados (módulos), que podem ser exportados e
     requisitados por outros módulos;
    -Essa é uma das principais dinamicas do node, e permite o Js rodar como
     linguagens backends em servidores;*/

//Forma de exportar os módulos - A

console.log("Antes: ", this);
/*  -O this se trata de um objeto, inicialmente vazio;
    -Ele pode ser acesssado por outros módulos, então é preciso colocar
     os dados que devem compartilhados, dentro desse objeto;
    -Para isso, existem quartro formas, 3 mostradas nesse arquivo e
     a principal presente em moduloB;*/

this.mensagemA1 = "Olá pessoal";
exports.mensagemA2 = 1440;
module.exports.mensagemA3 = "arroz e frango";
/*  -Desse froma, atributos são declarados para o objeto this, podendo
     então, serem acessados por outros módulos; */

const abc = "Ignorada";
/*  -Elementos não declarados dentro do objeto this, sáo serão exportados e 
     serão existentes apeanas dentro desse módulo; */

console.log("Depois: ", this);
/*  -Objeto this preenchido; */