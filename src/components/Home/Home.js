import React, { Component } from 'react';
import axios from 'axios';
import "./Home.css"
import { connect } from 'react-redux';

class Home extends Component {
    constructor() {
        super();

        this.state = {
            nowShowing: []
        }
    }

    async componentDidMount() {
        const { data: movies } = await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`);
        this.setState({ nowShowing: movies.results })
    }

    render() {
        console.log(this.state.nowShowing)
        const mappedMovies = this.state.nowShowing.map((movie, i) => {
            return (
                <div>
                    <div className='movie-card'>
                        <div key={i} className='movie-info'>
                            <h2 className='movie-title'>{movie.title}</h2>
                            <h3 className='critic-rating'>Critic's Rating: {movie.vote_average}</h3>
                            <h4 className='summary'>Summary: {movie.overview}</h4>
                        </div>
                        <div>
                            <img className='poster' src={"https://image.tmdb.org/t/p/w200" + movie.poster_path} alt='poster' />
                            {this.props.loggedIn === true ? <button>Add To Watchlist</button> : null}
                            
                        </div>
                    </div>
                </div>
            )
        })
        return (
            <div>
                <div className='now-showing'>
                    <h1>Now Showing in Theaters Near You</h1>
                </div>
                <div className="movie-contain">{mappedMovies}</div>
            </div>
        )
    }
}

const mapStateToProps = reduxState => {
    return {
        loggedIn: reduxState.authReducer.loggedIn
    }
}

export default connect(mapStateToProps)(Home);