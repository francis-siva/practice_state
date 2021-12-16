import React from "react";

import './Movies.css';

const Movies = () => {
    const axios = require('axios');

    const resApi = axios.get('https://api-allocine.herokuapp.com/api/movies/popular');

    resApi.then((res) => {
        console.log(res.data.results);
    });

    return(
        <div className="movies-container">
            <h1>Les films du moments</h1>
            <ul>
                <li>F9</li>
                <li>F5</li>
                <li>F7</li>
            </ul>
        </div>
    );
};

export default Movies;