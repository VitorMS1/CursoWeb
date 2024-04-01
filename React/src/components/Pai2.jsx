import React from "react";
import childrenWithProps from '../utilities/lastnameInheritance';

export default props => 
<div>
    <h1>Sr. {props.nome} {props.sobrenome}</h1>
    <hr />
    <h3>Filhos:</h3>
    <ul>
      {childrenWithProps(props)}
    </ul>

</div>