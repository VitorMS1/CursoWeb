{

console.log(Math.PI);   //Math retorna o valor de PI;

console.log(Math.pow(10, 2)); //Math.pow realiza uma potência, eleva (base, expoente);

console.log(Math.random())  //Math.random retorna um valor aleátorio de ponto flutuante, que seja, maior que ou igual a 0, e menor que 1;

//Arredondar números:

let a = Math.random() * 15;

console.log(Math.floor(a));  //Math.floor(x) arredonda retornando o inteiro mais próximo, que seja igual ou menor que o valor x informado;
console.log(Math.ceil(a));   //Math.ceil(x) arredonda retornando o inteiro mais próximo, que seja igual ou maior que o valor x informado;
console.log(Math.round(a));  //Math.round(x) arredonda retornando o inteiro mais próximo, caso a parte fracionária seja >=.5 ele retornará o inteiro maior, caso <=.4 o inteiro menor; 
console.log(Math.trunc(a));  //Math.trunv(x) retorna o inteiro de um número, removendo qualquer parte fracionárial;


};