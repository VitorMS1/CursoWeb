/*  -O desafio será, obter a mulher chinesa de menor salário de uma lista de
     500 funcionários, disponível em http://files.cod3r.com.br/curso-js/funcionarios.json */

const listaTecnologias = require('../../../../AulasFaculdade/Tópicos_Contemporaneos/observatorio/frontend/tecnologias/listaTecnologias');

{
<<<<<<< HEAD
    //Inicialmente é necessário objter o conteúdo da página, para isso utilizando axios;
=======
    //Inicialmente é necessário objter o conteúdo da página, parai isso utilizando axios;
>>>>>>> 8ccc767142bec1ba064443fd9cfbfcdb6a52e78e

    const axios = require('axios');
    const url = "http://files.cod3r.com.br/curso-js/funcionarios.json";

    // Código para isso;
    // axios.get(url).then((response) => 
    // { const listaFuncionarios = response.data; });
    
<<<<<<< HEAD
=======

>>>>>>> 8ccc767142bec1ba064443fd9cfbfcdb6a52e78e
    //Em seguida, é preciso criar funções para filtrar e comparar os funcionários;
    const filtraChines = funcionario => funcionario.pais === "China";
    const filtraMulher = funcionario => funcionario.genero === "F";
    const reduceMenorSalrio = (anterior, atual) => anterior.salario < atual.salario ? anterior : atual;

    //Por fim, juntando tudo e utilizando o filter e reduce nos dados;
    
    axios.get(url).then((response) => 
    {
        const listaFuncionarios = response.data;
        const resposta = listaFuncionarios
                        .filter(filtraChines)
                        .filter(filtraMulher)
                        .reduce(reduceMenorSalrio);
        
        console.log("Funcionária de menor salário: \n", resposta)
    });

}