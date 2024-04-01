import React from "react";
import Filho from "./Filho";

export default props => 
<div>
    <h1>Sr. {props.nome} {props.sobrenome}</h1>
    <hr />
    <h3>Filhos:</h3>
    <ul>
        <Filho nome="Pedro" sobrenome={props.sobrenome}/>
        <Filho {...props} sobrenome={props.sobrenome + " Jr"}/>
    </ul>

</div>