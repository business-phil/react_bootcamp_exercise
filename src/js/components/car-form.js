import React from 'react';

export class CarForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            newCar: {
                id: -1,
                make: '',
                model: '',
                year: 2017,
                color: '',
                price: 0
            }
        };
    }

    static propTypes = {
        addCar: React.PropTypes.func.isRequired
    };

    onChange = (e) => {
        this.setState({
            newCar: Object.assign({}, this.state.newCar,
                { [e.currentTarget.name]: e.currentTarget.value })
        });
    }

    addNewCar = (e) => {
        this.props.addCar(this.state.newCar);
        this.setState({
            newCar: {}
        });
    }

    render() {
        return (
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
                <button type="button" onClick={this.addNewCar}>Add Car</button>
            </form>
        );
    }
}
