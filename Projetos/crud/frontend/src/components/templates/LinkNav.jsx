import React from "react";
import './LinkNav.css';
import { Link } from "react-router-dom";

export default props =>
    <Link to={props.link} className="nav-item">
        <i className={`fa fa-${props.icon}`}></i>
        <span className="link-text">{props.text}</span>
    </Link>