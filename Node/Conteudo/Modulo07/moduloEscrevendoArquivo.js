/*  -Com esse módulo core do node, é também possível escrever arquivos;
    -Para isso: */

const fs = require('fs');

//Criando objeto para exemplificar
const exemploObjeto = 
{ id: "1a", nome: "Celular", preco: 2000 };

fs.writeFile(__dirname + "/exemploEscritoArq.json", JSON.stringify(exemploObjeto), 
    erro => { console.log(erro || "Arquivo criado com sucesso!")})

/*  -Desse forma (assincrono), é inicialmente passado nos parâmetros da função
     o endereço para escrever o arquivo, em seguida o conteúdo do arquivo, e por fim,
     um função callback que recebe como parâmetro apenas um erro caso ocorra; */