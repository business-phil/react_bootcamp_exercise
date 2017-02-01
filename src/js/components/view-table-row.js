import React from 'react';

export class ViewTableRow extends React.Component {

    static propTypes = {
        car: React.PropTypes.shape({
            id: React.PropTypes.number,
            make: React.PropTypes.string,
            model: React.PropTypes.string,
            year: React.PropTypes.number,
            color: React.PropTypes.string,
            price: React.PropTypes.number
        }),
        delete: React.PropTypes.func,
        edit: React.PropTypes.func
    };

    render() {
        return (
            <tr>
                <td>{this.props.car.make}</td>
                <td>{this.props.car.model}</td>
                <td>{this.props.car.year}</td>
                <td>{this.props.car.color}</td>
                <td>${this.props.car.price}</td>
                <td><button type="button" onClick={() =>
                    this.props.delete(this.props.car.id)}>Delete</button></td>
                <td><button type="button" onClick={() =>
                    this.props.edit(this.props.car.id)}>Edit</button></td>
            </tr>
        );
    }
}
