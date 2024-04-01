//Criando um gerador de id's;
const sequenceId = 
{
    _id: 1,
    getid() {return this._id++}
}

//Criando a variável que conterá a lista de produtos;
const produtos = {};

//Função para salvar produtos na lista;
function salvaProduto (produto)
{
    if(!produto.id){ produto.id = sequenceId.getid() }
    produtos[produto.id] = produto
    return produto
}

//Função para se obter/retornar produtos do id específicado;
function getProduto(id)
{
    return produtos[id] || console.log(`Nao há produto cadastrado para o id ${id}`)
}

//Função para se obter/retornar a lista de produtos;
function getProdutos()
{
    return Object.values(produtos)
}

//Função que permite excluir produto da lista;
function deleteProduto(id)
{
    delete produtos[id]
    return "produto Excluido"
}

//Exportando as funções (a lista de produtos e o gerador de id's só serão visiveis dentro do banco de dados);
module.exports = {salvaProduto, getProduto, getProdutos, deleteProduto};