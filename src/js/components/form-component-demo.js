import React from 'react';
import ReactDOM from 'react-dom';

class DemoForm extends React.PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            inputText: '',
            inputNumber: 0,
            inputDate: '2017-02-01',
            inputRange: 25,
            inputColor: '#f3a122',
            inputCheckbox: true,
            inputRadio: 'radio2',
            textarea: 'Add Comment Here...',
            selectDropDown: '',
            selectBox: 2,
            selectMultiSelect: []
        }
    }

    onChange = (e) => {

        let controlValue;

        switch (e.currentTarget.type) {
            case 'number':
                controlValue = Number(e.currentTarget.value);
                break;
            case 'checkbox':
                controlValue = e.currentTarget.checked;
                break;
            default:
                if (e.currentTarget.multiple) {
                    controlValue = Array.from(e.currentTarget.options)
                        .filter(option => option.selected)
                        .map(option => option.value)
                } else {
                    controlValue = e.currentTarget.value;
                }
                break;
        }

        this.setState({
            [e.currentTarget.name]: controlValue
        });
    }

    render() {
        return (
            <form>
                <div>
                    <label>Input Text:</label>
                    <input type="text" name="inputText" required value={this.state.inputText} onChange={this.onChange} />
                    <br /><span>{this.state.inputText}, {typeof this.state.inputText}</span>
                </div>
                <div>
                    <label>Input Number:</label>
                    <input type="number" name="inputNumber" value={this.state.inputNumber} onChange={this.onChange} />
                    <br /><span>{this.state.inputNumber}, {typeof this.state.inputNumber}</span>
                </div>
                <div>
                    <label>Input Date:</label>
                    <input type="date" name="inputDate" value={this.state.inputDate} onChange={this.onChange} />
                    <br /><span>{this.state.inputDate}, {typeof this.state.inputDate}</span>
                </div>
                <div>
                    <label>Input Range:</label>
                    <input type="range" name="inputRange" min="0" max="100" value={this.state.inputRange} onChange={this.onChange} />
                    <br /><span>{this.state.inputRange}, {typeof this.state.inputRange}</span>
                </div>
                <div>
                    <label>Input Color:</label>
                    <input type="color" name="inputColor" value={this.state.inputColor} onChange={this.onChange} />
                    <br /><span>{this.state.inputColor}, {typeof this.state.inputColor}</span>
                </div>
                <div>
                    <label>Input Checkbox:</label>
                    <input type="checkbox" name="inputCheckbox" checked={this.state.inputCheckbox} onChange={this.onChange} />
                    <br /><span>{this.state.inputCheckbox ? 'true' : 'false'}, {typeof this.state.inputCheckbox}</span>
                </div>
                <fieldset>
                    <legend>Fieldset Legend</legend>
                    <div>
                        <label>Input Radio One:</label>
                        <input type="radio" name="inputRadio" checked={this.state.inputRadio === 'radio1'} value="radio1" onChange={this.onChange} />
                    </div>
                    <div>
                        <label>Input Radio Two:</label>
                        <input type="radio" name="inputRadio" checked={this.state.inputRadio === 'radio2'} value="radio2" onChange={this.onChange} />
                    </div>
                    <div>
                        <label>Input Radio Three:</label>
                        <input type="radio" name="inputRadio" checked={this.state.inputRadio === 'radio3'} value="radio3" onChange={this.onChange} />
                    </div>
                    <br /><span>{this.state.inputRadio}, {typeof this.state.inputCheckbox}</span>
                </fieldset>
                <div>
                    <label>Textarea:</label>
                    <textarea name="textarea" value={this.state.textarea} onChange={this.onChange}></textarea>
                    <br /><span>{this.state.textarea}, {typeof this.state.textarea}</span>
                </div>
                <div>
                    <label>Drop Down:</label>
                    <select name="selectDropDown" value={this.state.selectDropDown} onChange={this.onChange}>
                        <option value="1">First One</option>
                        <option value="2">Second One</option>
                        <option value="3">Third One</option>
                    </select>
                    <br /><span>{this.state.selectDropDown}, {typeof this.state.selectDropDown}</span>
                </div>
                <div>
                    <label>Select Box:</label>
                    <select name="selectBox" size="3" value={this.state.selectBox} onChange={this.onChange}>
                        <option value="1">First One</option>
                        <option value="2">Second One</option>
                        <option value="3">Third One</option>
                    </select>
                    <br /><span>{this.state.selectBox}, {typeof this.state.selectBox}</span>
                </div>
                <div>
                    <label>Multi Select:</label>
                    <select name="selectMultiSelect" size="5" multiple value={this.state.selectMultiSelect} onChange={this.onChange}>
                        <option value="1">First One</option>
                        <option value="2">Second One</option>
                        <option value="3">Third One</option>
                    </select>
                    <br /><span>{this.state.selectMultiSelect}, {typeof this.state.selectMultiSelect}</span>
                </div>
            </form>
        );
    }
}

ReactDOM.render(<DemoForm />, document.querySelector('main'));
