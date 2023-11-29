const porta = 8000;  //Definindo uma porta para a aplicação;
const express = require('express') //importando o express;
const app = express();  //instanciando o express e atribuindo na variável app;
const bodyParser = require('body-parser'); //Instanciando e atribuindo o body-parser;
const dataBase = require('./DataBase'); //Instanciando e atribuindo banco de dados;

//transformando toda a url que será utilizada em json com essa extensão;
app.use(bodyParser.urlencoded({extended: true}))

//Utilizando o padrão chain of resposability;

//criando uma função para retornar a lista de produtos do banco de dados;
app.get('/produtos', (req, resp, next) => 
{
    resp.send(dataBase.getProdutos()) //Esse comando converte para Json;
})

//criando uma outra função para retornar o produto do id específico informado;
app.get('/produtos/:id', (req, resp, next) => 
{
    resp.send(dataBase.getProduto(req.params.id))
})

//criando uma função para ser possivel salvar produtos na lista;
app.post('/produtos', (req, resp, next) => 
{
    const produto = dataBase.salvaProduto(
        {
            nome: req.body.nome,
            preco: req.body.preco
        })
    resp.send(produto)
})

//criando função para permitir editar um produto da lista
app.put('/produtos/:id', (req, resp, next) => 
{
    const produto = dataBase.salvaProduto(
        {
            id: req.params.id,
            nome: req.body.nome,
            preco: req.body.preco
        })
    resp.send(produto)
})

//Criando função para excluir um produto da lista;

app.delete('/produtos/:id', (req, resp, next) => 
{
    const produto = dataBase.deleteProduto(req.params.id)
    resp.send(produto)
})

app.listen(porta, () => console.log(`Servidor está ativo na porta ${porta}`));
/*  -Em seguida, iniciando o servidor e printando uma mensagem de sucesso;
    -Startando o código e pesquisando pela "http://localhost:8000/produtos"
     no browser (ou postman), o objeto enviado será printado; */
