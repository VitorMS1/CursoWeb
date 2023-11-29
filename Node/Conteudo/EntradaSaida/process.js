/*  -O process se trata de objeto global do node que permite ler inputs 
     padrão (no caso, teclado do usario) e printar na saída padrão (no caso a tela); */

const anonimo = process.argv.indexOf("-a") !== -1

// console.log(anonimo);
//Entrando na pasta atual pelo terminal, e digitando "node process.js -a" o terminal retornará true;

if(anonimo)
{
 process.stdout.write("Olá usuário anonimo!\n")
 process.exit()
} else
{
    process.stdout.write("Digite seu nome: ")
    process.stdin.on('data', data => {
        const nome = data.toString()
        process.stdout.write(`Olá ${nome}`);
        process.exit()
    })
}