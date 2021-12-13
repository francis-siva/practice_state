import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Compteurs from "./components/Compteurs";
import Selectors from './components/selectors/Selectors';
import Configurator from './components/configurator/Configurator';
import DeviseDemo from "./components/devise_demo/Devise_demo";


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="compteurs" element={<Compteurs />} />
        <Route path="selecteurs" element={<Selectors />} />
        <Route path="configurateur" element={<Configurator />} />
        <Route path="devise_demo" element={<DeviseDemo />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
