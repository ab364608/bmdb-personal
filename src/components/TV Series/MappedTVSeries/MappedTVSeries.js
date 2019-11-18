import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

class MappedTopRatedTV extends Component {

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

    handleNotLoggedIn = () => {
        return alert('Please Log In to Use This Feature')
    }

    render() {
        const { tv } = this.props
        return (
            <div>
                {tv.poster_path !== null && tv.vote_average > 4 ?
                    <div className='card-list'>
                        <div className='card'>
                            <div className='info'>
                                <h2 className='the-title'>{tv.name}</h2>
                                <h3 className='critic-rating'>Critic's Rating: {tv.vote_average}</h3>
                                <h4 className='release-date'>Release Date: {tv.first_air_date}</h4>
                                <h4 className='summary'>{tv.overview}</h4>
                                {this.props.loggedIn === true ? <button onClick={this.addToWatchlist} className='watchlist'>Add To Watchlist</button> : <button className='watchlist' onClick={this.handleNotLoggedIn}>Add To Watchlist</button>}
                            </div>
                            <div>
                                <img className='poster' src={"https://image.tmdb.org/t/p/w200" + tv.poster_path} alt='poster' />
                            </div>
                        </div>
                    </div>
                    : null}
            </div>
        )
    }
}

const mapStateToProps = reduxState => {
    return {
        loggedIn: reduxState.authReducer.loggedIn
    }
}

export default connect(mapStateToProps)(MappedTopRatedTV);