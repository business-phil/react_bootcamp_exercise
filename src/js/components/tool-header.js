import React from 'react';

export class ToolHeader extends React.Component {

    static propTypes = {
        header: React.PropTypes.string
    };
    
    render() {
        return <h1>Color Tool</h1>;
    }
}
