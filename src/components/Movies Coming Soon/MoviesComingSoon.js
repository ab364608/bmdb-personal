import React, {Component} from 'react';
import axios from 'axios';
import MappedMoviesComingSoon from './MappedMoviesComingSoon/MappedMoviesComingSoon';


class MoviesComingSoon extends Component {
    constructor() {
        super();

        this.state = {
            comingSoon: []
        }
    }

    async componentDidMount() {
        const { data: movies } = await axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`);
        this.setState({ comingSoon: movies.results })
    }

    handleGoBack = () => {
        this.props.history.push('/movies');
    }

    render() {
        const mappedComingSoon = this.state.comingSoon.map((movie, i) => {
            return (
                <MappedMoviesComingSoon
                movie={movie}
                key={i}
                />
            )
        })
        return (
            <div className="home-background">
            <div className='showing'>
                <h1>Coming Soon to a Theatre Near You...</h1>
                <button className='goback' onClick={this.handleGoBack}>Go Back</button>
            </div>
            <div className="contain">{mappedComingSoon}</div>
        </div>
        )
    }
}

export default MoviesComingSoon;