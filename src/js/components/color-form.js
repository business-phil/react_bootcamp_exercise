import React from 'react';

export class ColorForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            newColor: ''
        };
    }

    static propTypes = {
        addColor: React.PropTypes.func.isRequired
    };

    onChange = (e) => {
        this.setState({
            [e.currentTarget.name]: e.currentTarget.value
        });
    }

    addNewColor = (e) => {
        this.props.addColor(this.state.newColor);
        this.setState({
            newColor: ''
        });
    }

    render() {
        return (
            <form>
                <div>
                    <label htmlFor="new-color-input">New Color</label>
                    <input type="text" id="new-color-input" name="newColor"
                        value={this.state.newColor} onChange={this.onChange} />
                </div>
                <button type="button" onClick={this.addNewColor}>Add Color</button>
            </form>
        );
    }
}
