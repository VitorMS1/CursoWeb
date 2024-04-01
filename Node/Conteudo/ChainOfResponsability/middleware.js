//middleware pattern ou chain of responsability

const passo1 = (contexto, next) => 
{
    contexto.valor01 = 'mid01'; //Atribuindo um valor para exemplificar;
    next()
}
const passo2 = (contexto, next) => 
{
    contexto.valor02 = 'mid02';
    next()
}

const passo3 = (contexto, next) => 
{
    contexto.valor03 = 'mid03'; 
    next()
}

const passoFinal = contexto => contexto.valorX = 'Acabou!!';

/*  -O parâmetro contexto irá carregar os dados resultados
     dessa função, para a próxima função. Enquanto o parâmetro
     next, irá invocar a próxima função que os dados irão passar; */

const executando =  (contexto, ...middlewares) => 
{
    const executaPasso = indice =>
    {
        middlewares && indice < middlewares.length && 
        middlewares[indice](contexto, () => executaPasso(indice +1))
    }
    executaPasso(0);
}

/*  -Para execução, a função executando recebe como parâmetros o contexto e um array
     contendo os middlewares para serem executacos (isso através do operador rest ...);
    -Em seguida é criada um função que irá executar o passo (ou seja a função middleware) com
     base no indice passado como parâmetro;
    -Então, nessa função são feitas algumas validações, primeiro verificando se o indice passado
     está de acordo com o tamanho do array de middlewares existente;
    -Após isso, a função middleware é chamada de acordo com o indice informado, recebendo como parâmetro o 
     contexto, e a mesma função (executaPasso) como parâmetro para o next, porém, adicionando +1 ao indice para que
     seja executado o próximo middleware da corrente; 
    -Por fim, a função executaPasso é chamada com o indice 0, para dar inicio a corrente de exução de funções (middlewares);*/

const exemplo = {}
executando(exemplo, passo1, passo3, passo2, passoFinal);

/*  -Por fim, para executar essa implementação, é criado um objeto chamado exemplo, que irá
     passar pelos processos dos middlewares;
    -Então, a função para executar os middlewares ("executando") é chamada, passando o objeto como parâmetro para 
     contexto e informando os passos a serem realizados em sua respectiva ordem; */

console.log(exemplo)