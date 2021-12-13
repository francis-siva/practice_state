import React, { useState } from "react";
import './Devise_demo.css';

const DeviseDemo = () => {

    const [currencEur, setCurrencEur] = useState("");
    const isNumber = input => {
        // const regexp = new RegExp('^[0-9]+$');
        const pattern = /^[0-9]+$/;

        // if(regexp(input)) {
        if(pattern.exec(input)) {
            console.log("is NUMBER ======== TRUE")
        }
    }
    return (
        <div className="devise_demo-container">
            <form>
                <label htmlFor="currency_eur">Currency €
                    <input type="text" name="currency_eur" id="currency_eur"
                        // value={currencEur}
                        onChange={(event)=> {
                            setCurrencEur(event.target.value);
                            
                            console.log(typeof currencEur);
                            isNumber(currencEur);
                            }
                        }
                    />
                </label>
                <br />
                <label htmlFor="currency_usd">Currency $
                    <input type="text" name="currency_usd" id="currency_usd"
                        value={currencEur * 1.2}
                        readOnly
                    />
                </label>
            </form>
            {/* <div>
                <span>{currencEur * 1.2}</span>
            </div> */}
        </div>
    );
};

export default DeviseDemo;