import React, { Component } from 'react';
import Aux from '../Aux/Aux';
import CardContainer from '../../containers/CardContainer/CardContainer';
import { TMBD_IMAGE_BASE_URL } from '../../api-constants';
import { connect } from 'react-redux';

const cardContainerStyles = {
    margin: "auto",
    width: "80%"
}

const backgroundStyles = (imagePath) => {
    return {
        backgroundImage: `url(${imagePath})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover"
    }
}

const overlayStyles = {
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)"
}

class Layout extends Component {
    render() {
        const imagePath = this.props.show.backdrop_path ? TMBD_IMAGE_BASE_URL + '/w500' + this.props.show.backdrop_path : "";

        return (
            <Aux>
                <div style={backgroundStyles(imagePath)}>
                    <div style={overlayStyles}>
                        <div style={cardContainerStyles}>
                            <CardContainer />
                        </div>
                    </div>

                </div>
            </Aux>
        );
    }
}

const mapStateToProps = state => {
    return {
        show: state.show
    }
}

export default connect(mapStateToProps, null)(Layout);