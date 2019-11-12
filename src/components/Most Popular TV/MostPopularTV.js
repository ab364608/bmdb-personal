import React, { Component } from 'react';
import axios from 'axios';
import MappedMostPopularTV from './MappedMostPopularTV/MappedMostPopularTV';

class MostPopularTV extends Component {
    constructor() {
        super();

        this.state = {
            mostPopular: []
        }
    };

    async componentDidMount() {
        const { data: tv } = await axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`);
        this.setState({ mostPopular: tv.results });
    }

    handleGoBack = () => {
        this.props.history.push('/tv');
    }

    render() {
        const mappedMostPopular = this.state.mostPopular.map((tv, i) => {
            return (
                <MappedMostPopularTV 
                tv={tv}
                key={i}
                />
            )
        })
        return (
            <div className="home-background">
                <div className='showing'>
                    <h1>The Most Popular TV Series this Month</h1>
                    <button className='goback' onClick={this.handleGoBack}>Go Back</button>
                </div>
                <div className="contain">{mappedMostPopular}</div>
            </div>
        )
    }
}

export default MostPopularTV;