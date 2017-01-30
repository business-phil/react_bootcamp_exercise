import React from 'react';
import ReactDOM from 'react-dom';

const colors = ['green', 'yellow', 'black', 'red', 'white', 'blue'];

const oldBlue = {
    make: "Oldsmobile",
    model: "Cutlass Ciera",
    year: 1993,
    color: "Blue",
    price: 1
}
const mercy = {
    make: "Mitsubishi",
    model: "Lancer",
    year: 2005,
    color: "Silver",
    price: 13000
}
const MCM = {
    make: "MINI",
    model: "Cooper Clubman",
    year: 2013,
    color: "Red",
    price: 25000
}
const cars = [oldBlue, mercy, MCM];

// class ColorList extends React.Component {
//     render() {
//
//         return (
//             <div>
//                 <h1>Color List</h1>
//                 <ul>
//                     {this.props.myColors.map(myColor =>
//                         <li>{myColor}</li>
//                     )}
//                 </ul>
//             </div>
//     );
//     }
// }

class CarTool extends React.Component {
    render() {
        return (
            <div>
                <h1>A Great Car Too</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Make</th>
                            <th>Model</th>
                            <th>Year</th>
                            <th>Color</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.myCars.map(myCar =>
                            <tr>
                                <td>{myCar.make}</td>
                                <td>{myCar.model}</td>
                                <td>{myCar.year}</td>
                                <td>{myCar.color}</td>
                                <td>${myCar.price}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        );
    }
}

// ReactDOM.render(<ColorList myColors={colors} />, document.querySelector('main'));
ReactDOM.render(<CarTool myCars={cars} />, document.querySelector('main'));
