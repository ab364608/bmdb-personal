import React, { Component } from 'react';
import axios from 'axios';
import MappedTopRatedTV from './MappedTopRatedTV/MappedTopRatedTV';

class TopRatedTV extends Component {
    constructor() {
        super();

        this.state = {
            topRated: []
        }
    };

    async componentDidMount() {
        const { data: tv } = await axios.get(`https://api.themoviedb.org/3/tv/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`);
        this.setState({ topRated: tv.results })
    }

    handleGoBack = () => {
        this.props.history.push('/tv');
    }

    render() {
        const mappedTopRated = this.state.topRated.map((tv, i) => {
            return (
                <MappedTopRatedTV 
                tv={tv}
                key={i}
                />
            )
        })
        return (
            <div className="home-background">
                <div className='showing'>
                    <h1>The Top 20 TV Series of All Time</h1>
                    <button className='goback' onClick={this.handleGoBack}>Go Back</button>
                </div>
                <div className="contain">{mappedTopRated}</div>
            </div>
        )
    }
}

export default TopRatedTV;