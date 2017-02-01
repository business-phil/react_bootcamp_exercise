import React from 'react';

export class EditTableRow extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            editCar: this.props.car
        };
    }

    static propTypes = {
        car: React.PropTypes.shape({
            id: React.PropTypes.number,
            make: React.PropTypes.string,
            model: React.PropTypes.string,
            year: React.PropTypes.number,
            color: React.PropTypes.string,
            price: React.PropTypes.number
        }),
        save: React.PropTypes.func,
        cancel: React.PropTypes.func
    };

    onChange = (e) => {
        this.setState({
            editCar: Object.assign({}, this.state.editCar,
            { [e.currentTarget.name]: e.currentTarget.value })
        });
    }

    render() {
        return (
            <tr>
                <td>
                    <input type="text" name="make" value={this.state.editCar.make} onChange={this.onChange} />
                </td>
                <td>
                    <input type="text" name="model" value={this.state.editCar.model} onChange={this.onChange} />
                </td>
                <td>
                    <input type="number" name="year" value={this.state.editCar.year} onChange={this.onChange} />
                </td>
                <td>
                    <input type="text" name="color" value={this.state.editCar.color} onChange={this.onChange} />
                </td>
                <td>
                    <input type="number" name="price" value={this.state.editCar.price} onChange={this.onChange} />
                </td>
                <td><button type="button" onClick={() =>
                    this.props.save(this.state.editCar)}>Save</button></td>
                <td><button type="button" onClick={() =>
                    this.props.cancel()}>Cancel</button></td>
            </tr>
        );
    }
}
