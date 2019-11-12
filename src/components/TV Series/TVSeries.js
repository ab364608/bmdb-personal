import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import MappedTVSeries from './MappedTVSeries/MappedTVSeries';

class TVSeries extends Component {
    constructor() {
        super();

        this.state = {
            search: [],
            input: ''
        }
    }

    searchTVSeries = async e => {
        const { value } = e.target;
        if (value === "") {
            this.setState({ search: [] })
        } else {
            const { data: tv } = await axios.get(`https://api.themoviedb.org/3/search/tv?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1&query=${e.target.value}`);
            this.setState({ search: tv.results, input: value })
        }
    }

    render() {
        const mappedSearch = this.state.search.map((tv, i) => {
            return (
                <MappedTVSeries
                tv={tv}
                key={i}
                />
            )
        })
        return (
            <div className='home-background'>
                <div className='below__nav'>
                    <ul className='search-actions'>
                        <Link to='/tv/toprated' ><button>Top Rated</button></Link>
                        <Link to='/tv/popular' ><button>Most Popular</button></Link>
                        <Link to='/tv/airing' ><button>Airing Today</button></Link>
                    </ul>
                    <div className='search-bar'>
                        <input className='search' placeholder='Search...' onChange={this.searchTVSeries} />
                    </div>
                    {this.state.search.length === 0 ? <h2 className='default-text'>Search for a TV Series...</h2> : <div className='contain'>{mappedSearch}</div>}
                </div>
            </div>
        )
    }
}

export default TVSeries;