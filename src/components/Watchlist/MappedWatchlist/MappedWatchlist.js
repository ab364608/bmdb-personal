import React, { Component } from 'react';
import '../Watchlist.scss';

class MappedWatchlist extends Component {
    render() {
        const { movie } = this.props;
        return (
            <div className='card-list'>
                    <div className='card'>
                        <div className='info'>
                            <h2 className='the-title'>{movie.movie_title}</h2>
                            <h3 className='critic-rating'>Critic's Rating: {movie.movie_rating}</h3>
                            <h4 className='summary'>{movie.movie_overview}</h4>
                            <button className='delete-from-watchlist' onClick={() => this.props.deleteFromWatchlist(movie.fav_movies_id)}>Watched</button>
                        </div>
                        <div>
                            <img className='poster' src={"https://image.tmdb.org/t/p/w200" + movie.movie_poster} alt='poster' />
                        </div>
                    </div>
                </div>
        )
    }
}

export default MappedWatchlist;