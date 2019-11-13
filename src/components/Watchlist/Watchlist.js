import React, {Component} from 'react';
import axios from 'axios';
import MappedWatchlist from './MappedWatchlist/MappedWatchlist';
import { connect } from 'react-redux';


class Watchlist extends Component {
    constructor() {
        super();

        this.state = {
            watchlist: []
        }
    }

    componentDidMount() {
        axios.get('/api/movies/watchlist')
        .then(response => {
            this.setState({ watchlist: response.data })
        })
        
    }

    handleGoBack = () => {
        this.props.history.push('/')
    }

    deleteFromWatchlist = async (id) => {
        const newWatchlist = await axios.delete(`/api/movies/watchlist/${id}`);
        this.setState({watchlist: newWatchlist.data})
    }

    render() {
        const mappedWatchlist = this.state.watchlist.map((movie, i) => {
            return (
            <MappedWatchlist
            movie={movie}
            key={i}
            deleteFromWatchlist={this.deleteFromWatchlist}
            />
            )
        })
        return (
            <div className="home-background">
                <div className='showing'>
                    <h1>{this.props.name}'s Watchlist</h1>
                    <button className='goback' onClick={this.handleGoBack}>Go Back</button>
                </div>
                <div className="contain">{mappedWatchlist}</div>
                {this.props.loggedIn === false ? window.location.href='/' : null}
            </div>
        )
    }
}

const mapStateToProps = reduxState => {
    return {
        name: reduxState.authReducer.name,
        loggedIn: reduxState.authReducer.loggedIn
    }
}

export default connect(mapStateToProps)(Watchlist);