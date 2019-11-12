import React, { Component } from 'react';
import axios from 'axios';
import MappedMostPopularMovies from './MappedMostPopularMovies/MappedMostPopularMovies';


class MostPopularMovies extends Component {
    constructor() {
        super();

        this.state = {
            mostPopular: []
        }
    }

    async componentDidMount() {
        const { data: movies } = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`);
        this.setState({ mostPopular: movies.results })
    }

    handleGoBack = () => {
        this.props.history.push('/movies');
    }

    render() {
        const mappedMostPopular = this.state.mostPopular.map((movie, i) => {
            return (
                <MappedMostPopularMovies 
                movie={movie}
                key={i}
                />
            )
        })
        return (
            <div className="home-background">
                <div className='showing'>
                    <h1>The Most Popular Movies this Month</h1>
                    <button className='goback' onClick={this.handleGoBack}>Go Back</button>
                </div>
                <div className="contain">{mappedMostPopular}</div>
            </div>
        )
    }
}

export default MostPopularMovies;