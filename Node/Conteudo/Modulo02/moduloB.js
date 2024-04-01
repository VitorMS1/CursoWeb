/*  -É possível também, chamar modulos padrão do node, para requitar alguma
     função expecífica;
    -A exemplo, o módulo http, em seguida executando uma função para criando um server,
     passando uma mensagem para escrever e definindo a porta em que estará escutando; */

const http = require('http');

http.createServer((req, res) => 
{
    res.write("Bem-vindo");
    res.end();
}).listen(8000);

/*  -No caso, o server é criado na porta local 8000, e a mensagem
     "bem-vindo" é escrita;
    -Entrando em "http://localhost:8000/", será possível encontrar o http */