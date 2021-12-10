import React from 'react';
import './Configurator.css';

const Configurator = () => {
    
    return (
        <div className="configurator-container">
            <div className="green-block">
                <h1>Configure ton vélo</h1>
            </div>
            <div className="green-block">
                <h3>1 - Choisis ton modèle</h3>
                <div className="modele-option">
                    <div>Vélo de ville (500 Eur)</div>
                    <div>Mountain Bike (700 Eur)</div>
                </div>
            </div>
            <div className="green-block">
                <h3>2 - Choisis ta selle</h3>
                <div className="seat-option">
                    <div>Classique (20 Euros)</div>
                    <div>Sur suspension (80 Euros)</div>
                </div>
            </div>
            <div className="green-block">
                <h3>Prix final {}</h3>                
            </div>
        </div>
    );
};

export default Configurator;