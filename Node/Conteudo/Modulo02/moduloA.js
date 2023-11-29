/*  -Em node também é possível instalar bibiliotecas, que no node, serão
     módulos contendos os recursos da biblioteca;
    -Para instalá-las, basta executar no terminal o comando "npm i" + o nome da biblioteca;
    -E para importar esse módulos, da mesma forma. Ex: */

const _ = require('lodash');

/*  -A exemplom a biblioteca "lodash" foi instalada (npm i lodash);
    -Por padrão, o underline costuma ser utilizado como nome de variável
     para referenciar o lodash;
    -No caso do lodash, basta apenas colocar o seu nome, pois, por padrão
     o node irá procurar na pasta node_modules criada pelo lodash, e 
     executar o arquivo index, ou seja, o mesmo que um ./lodash.js;
    -Ideal criar também um arquivo .gitignore caso esteja yuilizando git. E então,
     dentro desse arquivo, escrever "node_modules", para avitar que essa pasta seja
     compartilhada no git juntamente, pois, é uma pasta pesada e facil de se recuperar
     em outro ambiente; */

//Para testar, utilizando uma função da biblioteca lodash, que retorna valores aleatórios;

setInterval(() => console.log(_.random(1, 1000)), 2000);

/*  -Outro exemplo, instalando um outro recurso muito interessante para node;
    -Executando no terminal o comando "npm i -g nodemon", o nodemon é instalado, porém,
     agora de forma de global por conta do comando "-g".Para essa instalação pode ser preciso
     alterar o powershell para permitri a execução do código (comando: Set-ExecutionPolicy RemoteSigned);
    -Após instalá-lo, é possível utilizar o comando "nodemon" + nome de um arquivo, para que ele seja executado
     no terminal com node em tempo real. Se tornando um interessante recursos para desenvolvedores, evitando que
     sua aplicação caísse por um erro; */


