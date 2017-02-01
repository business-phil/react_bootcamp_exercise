import React from 'react';
import ReactDOM from 'react-dom';

const oldBlue = {
    id: 0,
    make: "Oldsmobile",
    model: "Cutlass Ciera",
    year: 1993,
    color: "Blue",
    price: 1
}
const mercy = {
    id: 1,
    make: "Mitsubishi",
    model: "Lancer",
    year: 2005,
    color: "Silver",
    price: 13000
}
const MCM = {
    id: 2,
    make: "MINI",
    model: "Cooper Clubman",
    year: 2013,
    color: "Red",
    price: 25000
}
const cars = [oldBlue, mercy, MCM];

const colors = ['green', 'yellow', 'black', 'red', 'white', 'blue'];

// import { ColorTool } from './components/color-tool';
//
// ReactDOM.render(<ColorTool items={colors} />, document.querySelector('main'));

import { CarTool } from './components/car-tool';

ReactDOM.render(<CarTool myCars={cars} />, document.querySelector('main'));
