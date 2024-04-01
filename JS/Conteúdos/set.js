/*  -Outra estrutura existente no js, é o set;
    -Essa estrutura se trata de um conjento de valores, que,
     não aceita repetições e não possui indice; 
    -Diferencia lestras maiusculas e minusculas;*/

     const setComidas = new Set();
     setComidas.add('arroz').add('frango').add('bolo');
     setComidas.add('arroz') //não será anexado novamente, pois não permite repetições;

     console.log(setComidas);
     console.log(setComidas.size);
     console.log(setComidas.has('arroz'));
     setComidas.delete('frango');

     const carros = ['Audi', 'BMW', 'Ford', 'Audi'];
     const setCarros = new Set(carros)
     console.log(setCarros)
    //Ignora repetições