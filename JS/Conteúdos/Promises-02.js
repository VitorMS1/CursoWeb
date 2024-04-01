//Exemplo conteúdo de uma página com promise;
const http = require("http");
const { json } = require("stream/consumers");

//Função com promise para capturar e transformar json;
const getClass = turma => 
{
    const url = `http://files.cod3r.com.br/curso-js/turma${turma}.json`;

    return new Promise((resolve, reject) => 
    {
        http.get(url, resposta =>
        {
            let conteudo = "";

            resposta.on('data', dados => 
            { conteudo += dados });

            resposta.on('end', () => 
            {
                try{resolve(JSON.parse(conteudo))}
                catch(e) {reject(e)}
            });
        });
    });
}

Promise.all([getClass("A"), getClass("B"), getClass("C")])
.then(turmas => [].concat(...turmas))
.then(alunos => alunos.map(aluno => aluno.nome))
.then(nomes => console.log(nomes))
.catch(e => console.log(e.message))

<<<<<<< HEAD
 /*-------------- Tornando mais Assincrona ------------------*/
=======
 /*-------------- Tornando mais sincrona ------------------*/
>>>>>>> 8ccc767142bec1ba064443fd9cfbfcdb6a52e78e
 
 let getAlunos = async () => 
 {
    const turmaA = await getClass("A");
    const turmaB = await getClass("B");
    const turmaC = await getClass("C");
    return [].concat(turmaA, turmaB, turmaC)
}
    
getAlunos()
.then(alunos => alunos.map(aluno => aluno.nome))
<<<<<<< HEAD
.then(nomes => console.log(`\n----- Tornando mais assincrona -----`, nomes))
=======
.then(nomes => console.log(`\n----- Tornando mais sincrona -----`, nomes))
>>>>>>> 8ccc767142bec1ba064443fd9cfbfcdb6a52e78e
