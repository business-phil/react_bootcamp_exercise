import React from 'react';

import { ToolHeader } from './tool-header';
import { ItemList } from './item-list';
import { ColorForm } from './color-form';

export class ColorTool extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            colors: this.props.items.concat()
        };
    }

    static propTypes = {
        items: React.PropTypes.array
    };

    addColor = (newColor) => {
        this.setState({
            colors: this.state.colors.concat(newColor)
        });
    }

    deleteColor = (color) => {
        this.setState({
            colors: this.state.colors.filter(color => color !== deleteColor)
        });
    }

    render() {
        return (
            <div>
                <ToolHeader header={"Color Tool"} />
                <ItemList items={this.state.colors} />
                <ColorForm addColor={this.addColor} />
            </div>
        );
    }
}
