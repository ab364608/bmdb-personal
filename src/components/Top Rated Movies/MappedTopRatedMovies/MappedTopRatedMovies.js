import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import '../TopRatedMovies.scss';

class MappedTopRatedMovies extends Component {

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

    handleNotLoggedIn = () => {
        return alert('Please Log In to Use This Feature')
    }


    render() {
        const { movie } = this.props
        return (
            <div className='card-list'>
                    <div className='card'>
                        <div className='info'>
                            <h2 className='the-title'>{movie.title}</h2>
                            <h3 className='critic-rating'>Critic's Rating: {movie.vote_average}</h3>
                            <h4 className='release-date'>Release Date: {movie.release_date}</h4>
                            <h4 className='summary'>{movie.overview}</h4>
                            {this.props.loggedIn === true ? <button onClick={this.addToWatchlist} className='watchlist'>Add To Watchlist</button> : <button className='watchlist' onClick={this.handleNotLoggedIn}>Add To Watchlist</button>}
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

export default connect(mapStateToProps)(MappedTopRatedMovies);