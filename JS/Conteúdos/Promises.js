/*  -Essa estrutura busca fazer uma 'promessa' e tentar realizar alguma 
     atividade (de forma assincrona), onde, caso essa atividade seja um sucesso
     um callback em uma função de sucesso será executado, caso dê errado uma
     função para erro será chamada;
    -Semelhante a um try/catch, porém assincrono; */

    function falar_Apos_Segundos(frase, segundos)
    { 
        return new Promise((resolve, reject) => 
        {
            setTimeout(() =>
            {
                resolve(frase)
            }, segundos*1000);
        })
    }
    /*  -Essa função retorna uma promise ao ser chamada;
        -A promise irá receber dois parâmetro, que por padrão são nomeados resolve e reject;
        -Essa promisse é setada para executar uma função, (no caso o setTimeout);
        -O resolve será chamado quando a promessa for atendida e irá retornar algo;
        -*/

    falar_Apos_Segundos('Deu tudo certo!', 3)
        .then((frase => {console.log(frase); return frase}))
        .then((frase => frase.concat("???")))
        .then((frase2 => console.log(frase2)))
        .catch(e => console.log("ERRO: ", e))

    /*  -A função é chamada definindo a frase e os segundos;
        -Dentro da função, o promisse irá executar o setTimeout, e assim que der o tempo, executará
         o resolve, que nesse caso apenas retorna a frase para o passo seguinte; 
        -Com o then na chamada da função, é possível definir o próximo passo que será executado, criando
         uma cadeia de callbacks;
        -Nesse caso, o primeiro then recebe a frase como parâmetro, e então printa a frase e a retorna para 
         o próximo; o seguinte retorna a frase concatenada; e o último, printa a frase novamente; 
        -Essas funções só podem retornar um único parâmetro;
        -Por fim um catch pode ser passsado para executar caso ocorra algum erro; */