import React, { Component } from 'react';
import { connect } from 'react-redux';


class MappedNowShowing extends Component {
    render() {
        // const { movie } = this.props;
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



        // const mappedNowShowing = this.state.nowShowing.map((movie, i) => {
        //     return (
        //         <MappedNowShowing
        //             movie={movie}
        //             key={i}
        //             viewNowShowing={this.viewNowShowing}
        //         />
        //     )
        // })

            // viewNowShowing = async e => {
    //     const { value } = e.target;
    //     if (value === '') {
    //         this.setState({ nowShowing: [] })
    //     } else {
    //         await axios.get(`https://api.fandango.com/geolocation/v2/countries/United%20States/postalcodes/${e.target.value}?api_key=e2jfwcm9vd7eq7gra8vkxbzx&sig=b9c0d56073645dedd4194269e6af6528957b15fee6d2ff1538f0e0b1a0daf2a0`);
    //         this.setState({ input: value })
    //     }
    // }