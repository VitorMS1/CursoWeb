import React from "react";
import Main from "../templates/Main";

export default props =>
    <Main icon="home" title="Início"
        subtitle="Projeto de cadastro de usuários">
        <div className="display-4">Bem-vindo!!</div>
        <hr />
        <p className="mb-0">Sistema de cadastro de usuários, desenvolvido em react e implementando elementos CRUD.</p>
    </Main>