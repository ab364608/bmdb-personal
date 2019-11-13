import React, { Component } from 'react';
import { connect } from 'react-redux';


class MappedNowShowing extends Component {
    render() {
        const { movie } = this.props;
        return (
            <div></div>
        )
    }
}

const mapStateToProps = reduxState => {
    return {
        loggedIn: reduxState.authReducer.loggedIn
    }
}

export default connect(mapStateToProps)(MappedNowShowing);