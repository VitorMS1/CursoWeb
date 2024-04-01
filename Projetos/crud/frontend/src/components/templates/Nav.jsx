import React from "react";
import './Nav.css';
import LinkNav from "./LinkNav";
import Logo from "./Logo";


export default props =>
    <aside className="nav-area sticky-top">
        <Logo />
        <div className="menu">
            <LinkNav link="/" icon="home" text="Início" />
            <LinkNav link="/users" icon="users" text="Usuários" />
        </div>
    </aside>