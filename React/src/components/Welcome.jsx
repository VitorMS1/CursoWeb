import React from "react";

const conteudoParaExportar = props =>
    <div>
        <h1>Bem vindo {props.nome}</h1>
        <h2>Sinta-se à vontade!!!</h2>
    </div>;

    {/* <React.Fragment>
        <h1>Bem vindo {props.nome}</h1>
        <h2>Sinta-se à vontade!!!</h2>
    </React.Fragment> */}



// export default props => [
//     <h1 key='h1'>Bem vindo {props.nome}</h1>,
//     <h2 key='h2'>Sinta-se à vontade!!!</h2>
// ];

export default conteudoParaExportar;