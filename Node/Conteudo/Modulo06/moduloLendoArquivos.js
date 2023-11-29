/*  -Com o modulo files do próprio node (um modulo core) é possível ler arquivos do projeto; 
    -é possível fazer isso de forma sincrona ou assincrona, onde na sincrona,
     só será executada após o arquivo ter sido completamente lido, ou seja, 
     sobrecarregando o interpretador do node. Logo, deve-se tomar cuidado com
     esse tipo de abordagem, pois aquivos pesados podem travar ou pesar o sistema; */

const fs = require('fs'); 
//Chamamdo módulo;

const rotaArquivo = __dirname + "/exemploArq.json";  
//Definindo endereço do arquivo;
//o termo __dirname puxa o endereço do diretório atual;

//Sincrona
const conteudoSincrono = fs.readFileSync(rotaArquivo, 'utf-8');
console.log("Sincrono:", conteudoSincrono);
/*  -Com a função readFileSync, são passados como parâmetro primeiramente o
     endereço do arquivo desejado, e em seguida, o encoder usado no arquivo
     (no caso o 'utf-8'; */ 

//Assincrono

fs.readFile(rotaArquivo, "utf-8", 
    (erro, conteudo) =>     
        {
        const conteudoArq = JSON.parse(conteudo);
        console.log("Assincrono 01: ", conteudoArq.BancoDeDados.User);
        })
/*  -Já para o readFile, são passados como parâmetros ainda o edereço e o 
     encoder, mas também uma função callback (recebendo um erro caso ocorra,
     e o conteúdo do arquivo) que irá tratar o conteúdo; */

//Permitindo assim fazer validações como:

const inserirSenha = (senha) => 
{ this.senha = senha; };
inserirSenha("12345"); //Definir uma senha;

fs.readFile(rotaArquivo, "utf-8", 
    (erro, conteudo) =>   
    {
        if (erro != "null")
        {
            const conteudoArq = JSON.parse(conteudo);
            if (this.senha == conteudoArq.BancoDeDados.senha)
            {
                console.log("Assincrono 02: ", conteudoArq.BancoDeDados.id);
            }
            else {console.log("Senha incorreta")}
        }
        else {console.log("ERRO: ", erro)};
    })

/*  -Dessa forma, só executando o comando caso a senha inserida seja a mesma da
     definida no banco de dados;
    -A execução dos assincronos irá variar, pois obviamente não será sempre sincronizada; */

//Outras formas 01
const conteudoSimples = require("./exemploArq.json")
console.log("Simples: ", conteudoSimples.BancoDeDados.host);
/*  -Em caso de arquivos Json, é possível fazer desssa forma mais simples; */

//Lendo uma pasta inteira
fs.readdir(__dirname, 
    (erro, arquivosDaPasta) => 
    {console.log("Arquivos da pasta: ", arquivosDaPasta);})

/*  -Passando como parâmetro o endereço e a função callback a ser executada;
    -Retornará um array com os arquivos presentes na pasta / diretório 
     informado (neste caso a própria pasta, pois foi informado o __dirname) */