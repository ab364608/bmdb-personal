import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import MappedMovies from './MappedMovies/MappedMovies';


class Movies extends Component {
    constructor() {
        super();

        this.state = {
            search: [],
            input: ''
        }
    }

    searchMovie = e => {
        this.setState({ input: e.target.value }, async () => {
            if (this.state.input === '') {
                this.setState({ search: [] })
            } else {
                const { data: movies } = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1&include_adult=false&query=${this.state.input}`);
                this.setState({ search: movies.results })
            }
        })
    }

    render() {
        const mappedSearch = this.state.search.map((movie, i) => {
            return (
                <MappedMovies 
                movie={movie}
                key={i}
                />
            )
        })

        return (
            <div className="home-background">
                <div className="below__nav">
                    <ul className='search-actions'>
                        <Link to='/movies/toprated' ><button>Top Rated</button></Link>
                        <Link to='/movies/popular' ><button>Most Popular</button></Link>
                        <Link to='/movies/comingsoon' ><button>Coming Soon</button></Link>
                    </ul>
                    <div className='search-bar'>
                        <input className='search' placeholder='Search...' onChange={this.searchMovie} />
                    </div>
                    {this.state.search.length === 0 ? <h2 className='default-text'>Search for a Movie...</h2> : <div className='contain'>{mappedSearch}</div>}
                </div>
            </div>
        )
    }
}

export default Movies;