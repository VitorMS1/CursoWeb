import React from 'react';
import './Logo.css';
import logo from '../../assets/images/logo.png';
import { Link } from 'react-router-dom';

export default props =>
    <aside className="logo">
        <Link className="logo-link" to="/">
            <img className='img-fluid' src={logo} alt="Logo" />
        </Link>
    </aside>