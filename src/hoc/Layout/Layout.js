import React, { Component } from 'react';

import CardContainer from '../../containers/CardContainer/CardContainer';

const styles = {
    margin: "auto",
    width: "80%"
}

class Layout extends Component {
    render() {
        return (
            <div style={styles}>
                <CardContainer />
            </div>
        );
    }
}

export default Layout;