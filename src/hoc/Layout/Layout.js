import React, { Component } from 'react';

import CardContainer from '../../containers/CardContainer';

const styles = {
    margin: "auto",
    width: "80%"
}

class Layout extends Component {
    render() {
        return (
            <div style={styles}>
                <h3>Is this Serie good?</h3>
                <CardContainer />
            </div>
        );
    }
}

export default Layout;