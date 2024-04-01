{
    /*-------------- Condicionais ------------------*/

    // If... else

    function escola(nota)
    {
        console.log("Escola 01:")

        if(nota >= 6)
        {
            console.log("Você passou de ano! :) ");
        }
        else
        {
            console.log("Você repetiu de ano. :( ");
        }
    }
    
    escola(7)
    
    /*  -Com o If (se), caso a sentença entre parenteses for verdadeira (true), o bloco de códugo será executado;
        -Sintaxe: if + (condição) + sentença de código;
        -Caso a condição do if não seja atendida, é possível colocar um else (opcional), que sera entrão executado,
         ou seja, se a condição do if não retornar true, a setença de código do else será executada;
        -Sintaxe: else + sentença de código*/


    function verificador(afirmacao)
    {

        if(afirmacao) 
        console.log(`A afirmação "${afirmacao}" é verdadeira`)
        else console.log(`A afirmação "${afirmacao}" é falsa`);
    }

    verificador("teste");

    /*  -Possível passar a sentença sem as {}, porém para melhor compreensão não recomneda-se;
        -Caso a sentença seja colocada sem as {} (bloco), só será possível executar um unico comando. 
        Ou seja, se houvessem 2 console.log() após o else, apenas o primeiro contaria como dentro do else,
        enquanto o segundo iria ser executado pela função independentemente da condição do if ser true ou não; 
        -Possível condicionar o if a partir de um único valor também, ao inves de operação relacional,
        dessa forma o resultado (true ou false) será de acordo com os valores definido por padrão pela linguagem
        para cada situação (em "Boolean.js" consta a informação de quais são");  */

    function escola2 (nota)
    {
        // console.log("Escola 02:")

        if((nota <= 10)&&(nota >= 9)) {return "Parabens! Você está no quadro de honra!"}
        else if((nota <= 8.99)&&(nota >= 6)){return"Parabens! Você foi aprovado!"}
        else if((nota <= 5.99)&&(nota >= 4)){return"Você está na recuperação, Se esforce e estude."}
        else if((nota <= 3.99)&&(nota >= 0)){return"Você foi reprovado. Se dedique mais da próxima vez."}
        else{console.log("Nota inválida.")};
    }

    console.log(escola2(10));

    /*  -Nesse caso com else if, o else também tera uma condição que precisa ser atendida (retornar true) para
        que o bloco de código seja executado;
        -Caso alguma condição anterior seja atendida, o else if seguinte não será executado, ou seja, executa o
        bloco de código do primeiro que retornar true;
        -Caso o if e nenhum else if seja atendido, a função executará o else comum; */

    //Switch

        function escola3 (nota)
        {
            console.log("Escola 03:")

            switch (Math.round(nota))
            {
                case 10: case 9:
                    console.log("Parabens! Você está no quadro de honra!")
                    break
                case 8: case 7: case 6:
                    console.log("Parabens! Você foi aprovado!")
                    break
                case 5: case 4: 
                    console.log("Você está na recuperação, Se esforce e estude.")
                    break
                case 3: case 2: case 1: case 0:
                    console.log("Você foi reprovado. Se dedique mais da próxima vez.")
                    break
                default: 
                    console.log("Nota inválida.")
            }
        }

        escola3(5);

        /*  -O switch permite realizar essa mesma tarefa porém de uma maneira diferente, com alguns nuances;
            -O comando break faz com que finalize a execução do metodo switch, caso contratio, todos os cases
            que estão abaixo seriam executados e não só o primeiro verdadeiro como no else if;
            -Logo, o último case não necessita do break;
            -O case deafult, define um padrão para caso nenhum case seja atendido (caso não seja o último, também precisa do break);
            -Também é possivel utilizar as {} para determinar o bloco de código, porém é pouco utilizado e não apresenta diferenças; */


    /*-------------- Repetição - Laço - Loop ------------------*/

    //while

    function numAleatorio(min, max)
    {
        return Math.round(Math.random() * (max - min) + min);
    }

    let num = -1;

    while(num != 5)
    {
        num = numAleatorio(1, 10);
        console.log(`Laço com while - O número sorteado da vez foi: ${num}!  \n ------`);
    }

    /*  -Aqui, a função numAleatorio() gerou diferentes números entre os informados no parâmetro, então,
        o while criou um laço de repetição, em que enquanto o num não fosse diferente de 5, ele continuaria a
        receber outro valor aleátorio e exibi-lo com o console.log();
        -O while cria um laço de repetição, que continua a ser executado enquanto a codição não for atendida;
        -É utilizado para quando não se sabe o número de repetições que serão usadas;
        -Caso a condição já esteja atendida, o laço nunca será executado; */

    do
    {
        num = numAleatorio(1, 10);
        console.log(`Laço com DoWhile - O número sorteado da vez foi: ${num}!  \n ------`);
    }  
     while(num != 5);

     /* -Igual o while comum, porém, obrigatoriamente irá executar o bloco ao menos 1 vez,
        mesmo que a condição já esteja atendida; */

    //For

    for (let i = 1; i <= 5; i++)
    {
        num = numAleatorio(1, 10);
        console.log(`Laço com for - O número sorteado da vez foi: ${num}! \n ------`);
    }

    /*  -Assim como o while, também gera um laço de repetição, porém, esse será com um número de
        repetições já previamente determinado
        -É declarada uma veriável "i", a condição para execução do laço diz que i precisa ser menor que 5
        para que seja atendida, ao mesmo tempo a variável i é incrementada em +1 a cada repetição, logo, foi
        possível definir o número de repetições que seriam feitas;  */

    let notas = [5, 6, 9, 8.4, 2.3, 10, 9.5];
    
    for(let i in notas)
    {
        console.log(`Nota ${i}: ${notas[i]} - ${escola2(notas[i])}`);
    }

    /*  -O for com o "in" permite percorrer os atributos de arrays ou objetos de maneira prática;
        -Porém, para arrays existem formas mais interessantes de se fazer isso;
        -Para objetos é uma boa alternativa; */

    let produtos = 
    {
        Id: 1,
        Nome: "Shampoo",
        Marca: "Clear"
    }

    for(let i in produtos)
    {
        console.log(`${i} = ${produtos[i]}`);
    }

    /*  -Percorre os atributos de um objeto; */

    //break / continue

    for(let i in notas)
    {
        if(i == 5) {break}
        console.log(`Nota ${i}: ${notas[i]} - ${escola2(notas[i])}`);
    }

    /*  -O break cancela o laço e o finaliza;
        -O if é ignorado e não afetado pelo break;
        -Logo, nesse caso, quando a confição do if é atendida (ou seja, o indice i for igual a 5)
        o break sera executado, finalizando o laço de repetição, então o laço continua ate atender o if
        e achar o indice desejado; 
        -Não recomenda-se o uso abrangente de break;
        -Similar ao "go to" das linguagens antigas; */

    for(let i in notas)
    {
        if(i == 5) {continue}
        console.log(`Nota ${i}: ${notas[i]} - ${escola2(notas[i])}`);
    }

    /*  -Semelhante a lógica do break, porém, ao invés de finaliar o laço,
        o continue ira apenas pular aquela repetição do laço específica;
        -Logo, ao encontrar o indice informado, a repetição dele será pulada;
        -Não recomenda-se o uso abrangente; */

    for(let letra of "Carro")
    {console.log(letra)}
    //Percorre os caracteres da string

    for(let nota of notas)
    {console.log(nota)}
    /*  -Percorrerá os elementos do array assim como o for in, porém
         irá fazer isso pelos valores e não pelas chacves, possibilitando
         printar diretamente o valor da variável; */

    const mapForOF = new Map
    ([['chave 01', 'valor 01'], ['chave 02', 'valor02']]);
    
    for(let indice of mapForOF.keys())
    {console.log(indice)}
    for(let valores of mapForOF.values())
    {console.log(valores)}
    for(let elementos of mapForOF.entries())
    {console.log(elementos)}
    for(let [chave, valor] of mapForOF.entries())
    {console.log(valor, chave)}
    //Possível também escolher o que ele percorrerá;
}
