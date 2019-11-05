import React from 'react';
import './Navbar.css';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { userLogin, updateState, userLogout } from '../../donald ducks/AuthReducer/AuthReducer';

class Navbar extends React.Component {
    constructor() {
        super();

        this.state = {
            open: false,
            error: false
        }
    }

    async componentDidMount() {
        await this.setState({open: true})
    }

    menuAction = () => {
        this.setState({ open: !this.state.open });
    }

    handleChange = e => {
        this.props.updateState({ [e.target.name]: e.target.value });
    }

    clickLogin = () => {
        this.props.userLogin(this.props.username, this.props.password, this.props.loggedIn)
            .catch(() => {
                this.setState({ error: true });
            })
    }

    clickLogout = () => {
        this.props.userLogout().then(() => {
            this.props.updateState()
        })
    }

    closeSidebar = () => {
        this.setState({open: false})
    }

    handleViewProfile = () => {
        this.props.history.push(`/profile/${this.props.username}`);
        this.closeSidebar();
    }

    render() {
        let sidebarClassnames = 'sidemenu';
        if (this.state.open) {
            sidebarClassnames += ' sidemenu-open'
        }

        return (
            <div className="App">
                <nav className='navBar'>
                    <h1 className='title'>BMDb</h1>
                    <ul className='nav-action'>
                        <Link to='/'><h2>Home</h2></Link>
                        <Link to='/movies'><h2>Movies</h2></Link>
                        <Link to='/tv'><h2>TV Series</h2></Link>
                        <img className='sidebar-button'
                            src='https://icon-library.net/images/menu-icon-white-png/menu-icon-white-png-27.jpg'
                            alt='sidebar'
                            onClick={this.menuAction}
                        />
                    </ul>
                </nav>
                <div className={sidebarClassnames}>
                    {this.props.loggedIn === false ? <ul className='sidemenu-list'>
                        <input className='login-input' placeholder='Username' name='username' onChange={this.handleChange} />
                        <input className='login-input' placeholder='Password' type="password" name='password' onChange={this.handleChange} />
                        <button className='sidemenu-action' onClick={this.clickLogin}>Log In</button>
                        <li className='register-text'>Or</li>
                        <Link to='/signup'><button className='sidemenu-action' onClick={this.closeSidebar}>Sign Up</button></Link>
                    </ul> : <ul className='sidemenu-logout'>
                        <h2 className='welcome'>Welcome,<br/> {this.props.name}</h2>
                        <button onClick={this.handleViewProfile}>View Profile</button>
                        <Link to='/favs/movies'><button onClick={this.closeSidebar}>Movie Watchlist</button></Link>
                        <Link to='/favs/tv'><button onClick={this.closeSidebar}>TV Series Watchlist</button></Link>
                        <button onClick={this.clickLogout}>Logout</button>
                    </ul>}

                </div>
            </div>
        );
    }
}

const mapStateToProps = reduxState => {
    return {
        username: reduxState.authReducer.username,
        password: reduxState.authReducer.password,
        name: reduxState.authReducer.name,
        loggedIn: reduxState.authReducer.loggedIn
    }
}

export default withRouter(connect(mapStateToProps, { userLogin, updateState, userLogout })(Navbar));