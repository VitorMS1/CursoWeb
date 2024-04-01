const { promises } = require('dns');

{
    const fs = require('fs');

    const url = __dirname + "/conteudoParaSerLido.txt";
    //ou
    //const path = require('path');
   // const url = path.join(__dirname, "conteudoParaSerLido.txt");

    function lerAquivo(url) 
    {
        return new Promise(resolve => 
            {
                fs.readFile(url, 
                    (erro, arquivo) => 
                    {
                        const arquivoConteudo = arquivo.toString();
                        resolve(arquivoConteudo);
                    })
            })
    }

    lerAquivo(url)
        .then(console.log)
}