
{
    const a = 10;
    const b = Number('1.5');     //Formas de declarar um number;
   
    /*---------------------------------------*/
    //Methods numbers 01 - Is
   
    const c = ("arroz" * 2);  //Resulta em um não número (NaN);
    const d = (10/0);        //Resulta em um número infinito - Infinity;
    
    console.log(Number.isInteger(b));   //Retorna um boolean informando se o número é inteiro ou não;
    console.log(Number.isNaN(c));       //Retorna um boolean informando se é um NaN (not a number) ou não;
    console.log(Number.isFinite(d));   //Retorna um boolean informando se o número é finito ou não;

    //Methods numbers 02 - To

    let e = Math.PI;

    console.log(a.toString(2));    //.toString(x) transforma o number em uma string de base x (ex: base 2 = binário);
    console.log(e.toFixed(2));     //.toFixed(x) limita o número de casas decimais para a quantidade informada em x;
   


};