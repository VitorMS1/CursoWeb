/*  -Como a depedências de um programa (isto é, as suas bibliotecas
     e frameworks necessários para que funcione corretamente) são pesadas, porém,
     fáceis de se innstalar, não é uma boa prática compartilha-las juntamente ao
     restante do código;
    -É então, muito mais prático criar um wizard, que saberá todas as dependências existentes
     para o programa, e irá instalá-las no novo ambiente quando o programa for executado;
    -Para isso, existe no node o comando para o terminal init (npm init);
    -Ele irá fazer algumas perguntas, e, salvar as respostas juntamente das dependências do
     programa, em um arquivo chamado package.json;
    -É possível adicior -y para pular essas perguntas, respondendo sim para todas (npm init -y); 
    -Ao compartilhar o projeto com esse arquivo, basta que seja executado no temrinal, o comando 
     "npm i" novamente. O sistema irá procrurar no arquivo as depêndencias e instalá-las; */

/*  -É possível também, adicionar a lista de dependências (aquivo package.json) logo ao instalar
     o novo recurso (biblioteca, framework e etc...), colocando --save junto ao comando no terminal,
     logo após o i (npm i --save nomeDoElemento); 
    -Existem também, alguns outros identificadores possíveis para se adicionar a esse comando. como
     por exemplo: --save-dev que se significa que essa depedêcia só é necessária durante o desenvolvimento
     do projeto; @versão -E que significa que essa dependência é para uma versão específica de um recurso,
     a exemplo para o axios, seria "npm i --save axios@0.17.1 -E", então apenas esta versão seria aceita; */

/*   -Para além disso, o arquivo package.json oferece outras possibilidades; 
     -A exemplo, dentro do arquivo há a função scripts ("scripts": {}), que é declarada como um objeto em 
      json. Esse comando permite trazer junto ao projeto, comandos para serem executados no próprio terminal,
      facilitando e automatizando certos trabalhos. Por exemplo, é possível definir um comando "start": "nodemon",
      e assim, sempre que for executado o comando npm start no terminal, o nodemo será rodado na máquina. Esse 
      comando start já é reconhecido previamente pelo node, mas caso queira criar um novo com uma função diferente,
      é também possivel, declarando no package.json da mesma forma ("nomeDesejado": "comando"), mas executando com 
      npm run nomeDoScript;  /*