import React, { Component } from 'react';


class MappedPeople extends Component {
    render() {
        const { people } = this.props
        return (
            <div>
                {people.profile_path !== null && people.popularity > 3 ?
                    <div className='card-list'>
                        <div className='card'>
                            <div className='info'>
                                <h2 className='the-title'>{people.name}</h2>
                                {people.known_for[2] !== undefined ? 
                                <h3 className='the-title'>Known For: {people.known_for[0].title || people.known_for[0].name}, {people.known_for[1].title  || people.known_for[1].name}, {people.known_for[2].title  || people.known_for[2].name}</h3> : 
                                <h3 className='the-title'>Known For: {people.known_for[0].title || people.known_for[0].name}</h3>}
                                <h4 className='critic-rating'>Popularity Rating: {people.popularity}</h4>
                            </div>
                            <div>
                                <img className='poster' src={"https://image.tmdb.org/t/p/w200" + people.profile_path} alt='poster' />
                            </div>
                        </div>
                    </div>
                    : null}
            </div>
        )
    }
}

export default MappedPeople;