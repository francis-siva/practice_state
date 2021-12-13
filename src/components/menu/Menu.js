import React from 'react';
import { Link } from 'react-router-dom';

import './Menu.css';

const Menu = () => {
    return (
        <nav>
            <ul>
                <li><Link to='compteurs'>Compteurs</Link></li>
                <li><Link to='selecteurs'>Selecteurs</Link></li>
                <li><Link to='configurateur'>Configurateur</Link></li>
                <li><Link to='devise_demo'>Devise_Demo</Link></li>
            </ul>
        </nav>
    );
}

export default Menu;