import React, {Component} from 'react';
import axios from 'axios';


class Movies extends Component {
    constructor() {
        super();

        this.state = {
            search: []
        }
    }

    // async componentDidMount() {
    //     const {data: movies} = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1&include_adult=false`);
    //     this.setState({search: movies.results})
    // }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default Movies;