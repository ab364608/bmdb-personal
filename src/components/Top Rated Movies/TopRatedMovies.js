import React, {Component} from 'react';
import axios from 'axios';
import MappedTopRatedMovies from './MappedTopRatedMovies/MappedTopRatedMovies';


class TopRatedMovies extends Component {
    constructor() {
        super();

        this.state = {
            topRated: []
        }
    }

    async componentDidMount() {
        const { data: movies } = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`);
        this.setState({ topRated: movies.results })
    }

    handleGoBack = () => {
        this.props.history.push('/movies');
    }

    render() {
        const mappedTopRated = this.state.topRated.map((movie, i) => {
            return (
                <MappedTopRatedMovies
                movie={movie}
                key={i}
                />
            )
        })
        return (
            <div className="home-background">
                <div className='showing'>
                    <h1>The Top 20 Movies of All Time</h1>
                    <button className='goback' onClick={this.handleGoBack}>Go Back</button>
                </div>
                <div className="contain">{mappedTopRated}</div>
            </div>
        )
    }
}

export default TopRatedMovies;