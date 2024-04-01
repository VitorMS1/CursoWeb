{
    let verdade = true;      // Com Boolean é possivel definir valores true ou false a uma variável;
    let mentira = false;

    console.log(`${verdade} e ${mentira}`)

    // Outra forma de declarar pode ser:

    verdade = 2;   // Se atribue true a qualquer número quando o sistema é forçado a ver algo de froma lógica;
    mentira = 0;   // E falso ao 0;

    console.log(`${!!verdade} e ${!!mentira}`);  // ! se traduz na negação lógica e pode ser usada em js, logo a negação da negação = sentença inicial;
    console.log(`${!verdade} e ${!mentira}`);   // Consequentemente, com apenas uma negação, a setença será invertida

    console.log(!true, !!true, !!false, !false);

    // Valores verdadeiros são:

    console.log(!!"textos");   //strings;
    console.log(!!-25);        //Números (exceto 0);
    console.log(!!" ");        //Espaço;
    console.log(!![]);         //colchetes vazios (array);
    console.log(!!{});         //chaves vazias (object)
    console.log(!!Infinity);   //Infinito;

    // Valores falsos são:

    console.log(!!0);
    console.log(!!NaN);       //Não números;
    console.log(!!"");        //Strings vazias ou variáveis vazias;
    console.log(!!null);      //Nulos;
    console.log(!!undefined); //Indefinido;

    // || significa: ou

    const bairro = "centro";
    const complemento = "";

    console.log(`Endereço: \n -Bairro = ${bairro || "Não informado"} \n -Complemento = ${complemento || "Não informado"}`)

    /* O || se traduz em um "ou" lógico que irá mostrar o primeiro valor que retornar true, como o valor do 
    complemento não foi declarado (ou caso fosse declarado algum valor que retorne false), o primeiro true 
    encontrado foi a string: "Não informado" */
    

}