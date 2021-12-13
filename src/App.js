import React from "react";
import Compteurs from './components/Compteurs'
import Menu from "./components/menu/Menu";

export default function App() {
    return (
        <div>
            <Menu/>
            <h1>EXERCICES REACT</h1>
            <Compteurs />
        </div>
    );
}
