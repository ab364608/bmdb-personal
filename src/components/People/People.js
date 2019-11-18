import React, { Component } from 'react';
import axios from 'axios';
import MappedPeople from './MappedPeople/MappedPeople';

class People extends Component {
    constructor() {
        super();

        this.state = {
            search: [],
            input: ''
        }
    }

    searchPeople = async e => {
        const { value } = e.target;
        if (value === '') {
            this.setState({ search: [] })
        } else {
            const { data: people } = await axios.get(`https://api.themoviedb.org/3/search/person?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1&include_adult=false&query=${e.target.value}`);
            this.setState({ search: people.results, input: value })
        }
    }

    render() {
        const mappedSearch = this.state.search.map((people, i) => {
            return (
                <MappedPeople
                people={people}
                key={i}
                />
            )
        })
        return (
            <div className='home-background'>
                <div className='below__nav'>
                    <div className='search-bar'>
                        <input className='search' placeholder='Search...' onChange={this.searchPeople}/>
                    </div>
                    {this.state.search.length === 0 ? <h2 className='default-text'>Search for an Actor...</h2> : <div className='contain'>{mappedSearch}</div>}
                </div>
            </div>
        )
    }
}

export default People;