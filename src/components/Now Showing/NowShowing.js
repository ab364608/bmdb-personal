import React, { Component } from 'react';
import axios from 'axios';
import MappedNowShowing from './MappedNowShowing/MappedNowShowing';
import './NowShowing.scss';
import { connect } from 'react-redux'

class NowShowing extends Component {
    constructor() {
        super();

        this.state = {
            nowShowing: [],
            input: ''
        }
    }

    viewNowShowing = async e => {
        const { value } = e.target;
        if (value === '') {
            this.setState({ nowShowing: [] })
        } else {
            await axios.get(`https://api.fandango.com/geolocation/v2/countries/United%20States/postalcodes/${e.target.value}?api_key=e2jfwcm9vd7eq7gra8vkxbzx&sig=b9c0d56073645dedd4194269e6af6528957b15fee6d2ff1538f0e0b1a0daf2a0`);
            this.setState({ input: value })
        }
    }

    handleGoBack = () => {
        this.props.history.push('/movies');
    }

    render() {
        const mappedNowShowing = this.state.nowShowing.map((movie, i) => {
            return (
                <MappedNowShowing
                    movie={movie}
                    key={i}
                    viewNowShowing={this.viewNowShowing}
                />
            )
        })
        return (
            <div className='home-background'>
                <div className='nowshowing'>
                    <div className='nowshowing-goback'>
                        <h1>Movies Now Showing Near You</h1>
                        <button className='goback' onClick={this.handleGoBack}>Go Back</button>
                    </div>
                    <input className='zipcode' placeholder='Enter Zipcode' onChange={this.viewNowShowing} />
                </div>
                {mappedNowShowing}
                {this.props.loggedIn === false ? window.location.href='/' : null}
            </div>
        )
    }
}

const mapStateToProps = reduxState => {
    return {
        loggedIn: reduxState.authReducer.loggedIn
    }
}

export default connect(mapStateToProps)(NowShowing);