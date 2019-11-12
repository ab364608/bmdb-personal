import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

class MappedMostPopularMovies extends Component {

    addToWatchlist = async () => {
        const { movie } = this.props;
        axios.post('/api/movies', {
            movie_id: movie.id,
            movie_title: movie.title,
            movie_overview: movie.overview,
            movie_poster: movie.poster_path,
            movie_rating: movie.vote_average
        })
    }

    render() {
        const { movie } = this.props
        return (
            <div className='card-list'>
                    <div className='card'>
                        <div className='info'>
                            <h2 className='the-title'>{movie.title}</h2>
                            <h3 className='critic-rating'>Critic's Rating: {movie.vote_average}</h3>
                            <h4 className='summary'>{movie.overview}</h4>
                            {/* <div>{movie.video}</div> */}
                            {this.props.loggedIn === true ? <button onClick={this.addToWatchlist} className='watchlist'>Add To Watchlist</button> : null}
                        </div>
                        <div>
                            <img className='poster' src={"https://image.tmdb.org/t/p/w200" + movie.poster_path} alt='poster' />
                        </div>
                    </div>
                </div>
        )
    }
}

const mapStateToProps = reduxState => {
    return {
        loggedIn: reduxState.authReducer.loggedIn
    }
}

export default connect(mapStateToProps)(MappedMostPopularMovies);