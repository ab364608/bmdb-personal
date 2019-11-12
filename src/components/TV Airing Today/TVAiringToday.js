import React, { Component } from 'react';
import axios from 'axios';
import MappedTVAiringToday from './MappedTVAiringToday/MappedTVAiringToday';

class TVAiringToday extends Component {
    constructor() {
        super();

        this.state = {
            airingToday: []
        }
    };

    async componentDidMount() {
        const { data: tv } = await axios.get(`https://api.themoviedb.org/3/tv/airing_today?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`);
        this.setState({ airingToday: tv.results })
    }

    handleGoBack = () => {
        this.props.history.push('/tv');
    }

    render() {
        const mappedAiringToday = this.state.airingToday.map((tv, i) => {
            return (
                <MappedTVAiringToday
                tv={tv}
                key={i}
                />
            )
        })
        return (
            <div className="home-background">
                <div className='showing'>
                    <h1>TV Series On Air Today</h1>
                    <button className='goback' onClick={this.handleGoBack}>Go Back</button>
                </div>
                <div className="contain">{mappedAiringToday}</div>
            </div>
        )
    }
}

export default TVAiringToday;