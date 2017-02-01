import React from 'react';

import { ToolHeader } from './tool-header';
import { CarTable } from './car-table';
import { CarForm } from './car-form';

export class CarTool extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            myCars: this.props.myCars.concat()
        };
    }

    static propTypes = {
        header: React.PropTypes.string,
        myCars: React.PropTypes.array
    }

    addCar = (newCar) => {
        newCar.id = this.state.myCars.length;
        this.setState({
            myCars: this.state.myCars.concat(newCar)
        });
    }

    delete = (carId) => {
        this.setState({
            myCars: this.state.myCars.filter(({ id }) => id !== carId)
        })
    }

    save = (editCar) => {
        this.setState({
            myCars: this.state.myCars.filter(car => car.id !== editCar.id).concat(editCar)
            // Reset editId in car-table
        })
    }

    render() {
        return (
            <div>
                <ToolHeader header={"A Great Car Tool"} />
                <CarTable myCars={this.state.myCars} delete={this.delete} save={this.save} />
                <h3>Add New Button</h3>
                <CarForm addCar={this.addCar} />
            </div>
        );
    }
}
