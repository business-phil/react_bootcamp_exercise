import React from 'react';

export class ViewItemRow extends React.Component {
    render() {
        return (

        );
    }
}

export class EditItemRow extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            item: props.item
        };
    }

    onChange = (e) => {
        this.setState({
            [e.currentTarget.name]: e.currentTarget.value
        });
    }

    render() {
        return (
            <li>
                <input type="text" id="item-input" name="item" value={this.state.item} onChange={this.onChange} />
            </li>
        );
    }
}

export class ItemList extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            editItem: ''
        }
    }

    static propTypes = {
        header: React.PropTypes.string,
        items: React.PropTypes.array
    };

    render() {
        return (
            <ul>
                {this.props.items.map(item =>
                    this.state.editItem === item
                        ? <EditItemRow key={item} item={item} saveRow ={this.saveRow} cancelRow={this.cancelRow} />
                        : <ViewItemRow key={item} item={item} editrow={this.editRow} deleteRow={this.deleteRow} />
                )}
            </ul>
        );
    }
}
