{

    function tratamentoErro(erro)
    {
        const info = 
        {            
            nome: erro.name,
            mensagem: erro.message,
            data: new Date
        };

        throw  "Ocorreu um erro";
    }

    /*  -Incialmente criando uma função que será chamada quando ocorrer algum erro,
        essa função irá capturar informações sobre o erro com o objeto info, e irá
        lançar no console a string "Ocorreu um erro", através do comando throw;
        -Comando throw, gera um exceção com a expressão que for definida, e a lança;
        -Sintaxe: throw + expressão desejada; */

    function retornaNome (pessoa)
    {
        try
        {
            console.log(pessoa.nome.toUpperCase());
        }
        catch(e)
        {
            tratamentoErro(e);
        }
        finally
        {
            console.log("Fim da execução");
        }
    }

    /*  -Essa função irá retornar o atributo nome do objeto pessoa, porém em maiúsculo;
        -O comando try, irá tentar executar o bloco de codigo informado, caso não consiga
        será gerado um erro, que será capturado pelo comando catch(e), que por sua vez, irá
        executar o bloco de código informado (nesse caso, a função tratamentoErro()). Em seguida,
        o bloco de código do comando finally é executado (a execução do finally se dá independentemente
        da ocorrência de um erro ou não, havendo ou não um erro ele ainda será executado);
        -Importante sempre buscar tratar o erro, para que caso ocorra o usuário não recebe uma mensagem
        estranha, que possa assustá-lo ou que contenha informações internas sobre o código; */

    const pessoa = { /*nome: "vitor"*/ }
    retornaNome(pessoa)
}