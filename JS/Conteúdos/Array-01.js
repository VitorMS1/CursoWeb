
/*-------------- Declarando + dinâmicas ------------------*/
console.log(`\n----- Declarando + dinâmicas -----`)

{ 
    const exemplo01 = [0, 2.5, "arroz", true, null, Infinity, undefined, NaN, {id: 3}];       
    /*Declarando um array:
       - Em js ele aceita valores de vários tipos;
       - Entretanto, para boas práticas, recomenda-se utilizar um tipo por array;
       - Em js, o seu tamanho é variável, não sendo preciso defini-lo; */

    console.log(exemplo01);

    //Outra forma de declarar (não tão comum/indicada)
    const arrayNotas = new Array("MARIO", 10, 8.5);

    //Dinâmicas
    console.log("index 3: ", arrayNotas[2]);             //Exibe o valor do array no index informado, contando a partir do 0;
    console.log("Index inexistente: ", arrayNotas[8]);  //Caso não exista valor no index informado, retorna undefined;
    arrayNotas[8] = 6;           //Possível definir valores de casas específicas;
    console.log("Lacunas indices: ", arrayNotas)    // Informa também a lacuna gerada nos valores;
}

/*-------------- Funções e recursos de array ------------------*/
console.log(`\n----- Funções e recursos de array -----`)

{
    const exemplo02 = [10, -14, 5.8,  "Arroz"];       

    //Informa o tamanho do array, contando com os espaços vazios;
    console.log("Tamanho: ", exemplo02.length);  
    
    //.push() adiciona os valores dentro do () ao array, em última posição;
    exemplo02.push(`Mundo de ${exemplo02[3]}`);  
    //.unshift() adiciona os valores dentro do () ao array, em primeira posição;
    exemplo02.unshift(`SÁBADO`);
    console.log("Elementos novos: ", exemplo02)
    
    //.pop() retira o último valor do array (ele pega e remove do array);
    console.log(`Elemento removido: ${exemplo02.pop()} \narray após:`, exemplo02);
    //.shift() retira o primeiro valor do array (ele pega e remove do array);   
    console.log(`Elemento removido: ${exemplo02.shift()} \narray após:`, exemplo02);   
   
    //Deleta valor informado;
    delete exemplo02[2]; 
    console.log("Delete: ", exemplo02);

    //Deletar e adicionar ao mesmo tempo / substituir
    exemplo02.splice(2, 2, Math.PI.toFixed(2), 3, "Novos");
    console.log("Substituindo: ", exemplo02);
    /*  -Sintaxe: splice(indiceParaComeçar, númeroDeIntensDeletados, elementosQueDesejaAdcionar...)
        -No caso, começando do índice 2, deletou 2 elementos e adicionou os outros 3 nos lugar  */
        
    //Criar novo array com parte de outro
    const pedacoExemplo02 = exemplo02.slice(1, 4);
    console.log("Array pedaço:", pedacoExemplo02);
    /*  -Sintaxe: arrayParaCortar.slice(indiceParaComeçar, indiceLimite)
        -No caso, criou um array com um pedaço do array exemplo02, começando do índice 1, 
         e indo até o 3 (o indice de limite não entra); */
        
    //Organiza array
    exemplo02.sort();
    console.log("Organizado: ", exemplo02);
}
