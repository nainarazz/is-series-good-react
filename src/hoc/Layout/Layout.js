import React, { Component } from 'react';

import Aux from '../Aux/Aux';
import Header from '../../containers/Header/Header';


class Layout extends Component {
    render() {
        return (
            <Aux>
                <Header />
                <main>
                    {this.props.children}
                </main>
            </Aux>
        );
    }
}

export default Layout;