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
//
//     constructor(props) {
//         super(props);
//
//         this.state = {
//             newColor: ''
//         };
//
//         // Binds the instance object to the prototype method,
//         // creating a new onChange method for each instance
//         this.onChange = this.onChange.bind(this);
//     }
//
//     onChange(e) {
//         this.setState({
//             [e.currentTarget.name]: e.currentTarget.value
//         });
//     }
//
//     render() {
//         return (
//             <div>
//                 <h1>Color List</h1>
//                 <ul>
//                     {this.props.myColors.map(myColor =>
//                         <li>{myColor}</li>
//                     )}
//                 </ul>
//                 <form>
//                     <div>
//                         <label htmlFor="new-color-input">New Color</label>
//                         <input type="text" id="new-color-input" name="newColor"
//                             value={this.state.newColor} onChange={this.onChange} />
//                     </div>
//                 </form>
//             </div>
//         );
//     }
// }

class CarTool extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            newCar: {
                make: '',
                model: '',
                year: 2017,
                color: '',
                price: 0
            }
        };

        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        this.setState({
            newCar: Object.assign({}, this.state.newCar, { [e.currentTarget.name]: e.currentTarget.value })
        });
    }

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
                <h3>Add New Car</h3>
                <form>
                    <div>
                        <label htmlFor="new-make-input">Make</label>
                        <input type="text" id="new-make-input" name="make"
                        value={this.state.newCar.make} onChange={this.onChange} />
                    </div>
                    <div>
                        <label htmlFor="new-model-input">Model</label>
                        <input type="text" id="new-model-input" name="model"
                        value={this.state.newCar.model} onChange={this.onChange} />
                    </div>
                    <div>
                        <label htmlFor="new-year-input">Year</label>
                        <input type="number" id="new-year-input" name="year"
                        value={this.state.newCar.year} onChange={this.onChange} />
                    </div>
                    <div>
                        <label htmlFor="new-color-input">Color</label>
                        <input type="text" id="new-color-input" name="color"
                        value={this.state.newCar.color} onChange={this.onChange} />
                    </div>
                    <div>
                        <label htmlFor="new-price-input">Price</label>
                        <input type="number" id="new-price-input" name="price"
                        value={this.state.newCar.price} onChange={this.onChange} />
                    </div>
                </form>
            </div>
        );
    }
}

// ReactDOM.render(<ColorList myColors={colors} />, document.querySelector('main'));

ReactDOM.render(<CarTool myCars={cars} />, document.querySelector('main'));
