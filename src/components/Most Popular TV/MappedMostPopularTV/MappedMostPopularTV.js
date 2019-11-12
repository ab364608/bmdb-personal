import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

class MappedMostPopularTV extends Component {

    addToWatchlist = async () => {
        const { tv } = this.props;
        axios.post('/api/movies', {
            movie_id: tv.id,
            movie_title: tv.name,
            movie_overview: tv.overview,
            movie_poster: tv.poster_path,
            movie_rating: tv.vote_average
        })
    }

    render() {
        const { tv } = this.props
        return (
            <div className='card-list'>
                    <div className='card'>
                        <div className='info'>
                            <h2 className='the-title'>{tv.name}</h2>
                            <h3 className='critic-rating'>Critic's Rating: {tv.vote_average}</h3>
                            <h4 className='summary'>{tv.overview}</h4>
                            {this.props.loggedIn === true ? <button onClick={this.addToWatchlist} className='watchlist'>Add To Watchlist</button> : null}
                        </div>
                        <div>
                            <img className='poster' src={"https://image.tmdb.org/t/p/w200" + tv.poster_path} alt='poster' />
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

export default connect(mapStateToProps)(MappedMostPopularTV);