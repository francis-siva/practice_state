import React, { useState } from "react";
import "./Compteurs.css";

const Compteurs = () => {
const [compteur1, setCompteur1] = useState(0);
const [compteur2, setCompteur2] = useState(0);
    return (
    <div className="bgdCompteurs">
        {/* COMPTEUR n°1 */}
        <div className="compteur1">
            <span>COMPTEUR n°1</span>
            {compteur1 > 0?
                <button onClick={() => {
                    setCompteur1(compteur1 -1);
            }}>-</button>: null}

            {/* <div> */}
                <span>{compteur1}</span>
            {/* </div> */}

            {compteur1 < 10 &&(
                <button onClick={() => {
                    setCompteur1(compteur1 +1);
                }}>+</button>
            )
            }

        </div>

        {/* COMPTEUR n°2 */}
        <div className="compteur2">
            <span>COMPTEUR n°2</span>
            <button onClick={() => {
                setCompteur2(compteur2 -1);

            }}>-</button>

            <button onClick={() => {
                setCompteur2(compteur2 +1);

            }}>+</button>
            <div>
                <span>{compteur2}</span>
            </div>
        </div>

    </div>
    );
};

export default Compteurs;
