import React from "react";

export function BoaNoite(props)
{
    return <h1>Boa noite {props.nome}!</h1>
}

export const BomDia = props=> <h1>Bom dia {props.nome}!</h1>

export default {BoaNoite, BomDia};