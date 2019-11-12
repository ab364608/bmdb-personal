import React, { Component } from 'react';
import axios from 'axios';
import MappedHome from './MappedHome/MappedHome';

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
        const mappedMovies = this.state.nowShowing.map((movie, i) => {
            return (
                <MappedHome 
                movie={movie}
                key={i}
                />
            )
        })
        return (
            <div className="home-background">
                <div className='showing'>
                    <h1>Now Showing in Theaters Near You</h1>
                </div>
                <div className="contain">{mappedMovies}</div>
            </div>
        )
    }
}

export default Home;