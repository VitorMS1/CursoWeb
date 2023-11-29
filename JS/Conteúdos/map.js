/*  -Com o js é também possível criar um map, que seria um tipo de objeto 
     onde as chaves também podem ser definidas, não estando fixas como 
     números de um índice; */

     const mapDinamico = new Map();
     mapDinamico.set("chave 01", {nome: "valor objeto"});
     mapDinamico.set(100, "VAlor 2");

     console.log(mapDinamico.get('chave 01'));
     //É preciso utilizar get/set para manipular os dados

     const mapDiferentesChaves = new Map
     ([
       [ function chave(){}, "Função"],
       [{}, "Objeto"],
     ]);
     //Atribuindo diferentes tipos como chave;

     mapDiferentesChaves.forEach((valor, chave) => console.log(chave, valor));
     //Printando com forEach

     console.log("Possui 100? ", mapDinamico.has(100));
     //.has verifica se possui;
     mapDinamico.delete(100);
     console.log("Possui 100? ", mapDinamico.has(100));

     console.log("Quantos elementos? ", mapDinamico.size);
     //Retorna número de elementos;