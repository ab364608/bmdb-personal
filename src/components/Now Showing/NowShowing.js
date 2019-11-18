import React, { Component } from 'react';
import './NowShowing.scss';
import { connect } from 'react-redux';

class NowShowing extends Component {
    constructor() {
        super();

        this.state = {
            nowShowing: '',
            input: ''
        }
    }

    handleZipcode = e => {
        this.setState({ input: e.target.value });
    }

    updateURL = () => {
        this.setState({ nowShowing: `https://www.fandango.com/${this.state.input}_movietimes?mode=general&q=${this.state.input}` });
    }

    handleGoBack = () => {
        this.props.history.push('/movies');
    }

    render() {
        return (
            <div className='home-background'>
                <div className='nowshowing'>
                    <div className='nowshowing-goback'>
                        <h1>Movie Showtimes Based on Zipcode</h1>
                        <button className='goback' onClick={this.handleGoBack}>Go Back</button>
                    </div>
                        <input className='zipcode' placeholder='Enter Zipcode' onChange={this.handleZipcode} />
                        <p className='redirect-text'>This Action WILL Open a New Tab</p>
                        <a href={this.state.nowShowing} target="_blank" rel="noopener noreferrer" ><button onClick={this.updateURL} className='fandago'>Enter</button></a>
                </div>
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