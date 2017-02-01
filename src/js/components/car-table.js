import React from 'react';
import { ViewTableRow } from './view-table-row';
import { EditTableRow } from './edit-table-row';

export class CarTable extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            editId: -1
        };
    }

    static propTypes = {
        myCars: React.PropTypes.array,
        delete: React.PropTypes.func,
        save: React.PropTypes.func
    };

    edit = (id) => {
        this.setState({
            editId: id
        });
    }

    cancel = () => {
        this.setState({
            editId: -1
        });
    }

    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th>Make</th>
                        <th>Model</th>
                        <th>Year</th>
                        <th>Color</th>
                        <th>Price</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.myCars.map(myCar =>
                        this.state.editId === myCar.id
                            ? <EditTableRow key={myCar.id} car={myCar}
                                save={this.props.save} cancel={this.cancel} />
                            : <ViewTableRow key={myCar.id} car={myCar}
                                delete={this.props.delete} edit={this.edit} />
                    )}
                </tbody>
            </table>
        )
    }
}
