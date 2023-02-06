'use strict';

const key = require("./secret");
//To get am API key => https://www.weatherapi.com/
//create secret.js to return the key
//const key = "<your api key>";
//module.exports = key;

class Weather {
    constructor() { }

    async GetCurrent(city) {

        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        return fetch(`http://api.weatherapi.com/v1/current.json?key=${key}&q=${city}`, requestOptions)
            .then(response => response)
            .then(result => result)
            .catch(error => console.log('error', error));
    }
}

module.exports = Weather

