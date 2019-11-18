import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Profile.scss';
import { updateState, editUserProfile, userLogout } from '../../donald ducks/AuthReducer/AuthReducer';
// import axios from 'axios';
import ProfileImage from './Profile Image/ProfileImage';

class Profile extends Component {
    constructor() {
        super();

        this.state = {
            editUsername: false,
            editPassword: false,
            editName: false
        }
    }

    handleUsername = () => {
        if (this.state.editUsername === false) {
            this.setState({ editUsername: true })
        } else {
            this.setState({ editUsername: false })
        }
    }

    updateUsername = () => {
        this.props.editUserProfile(this.props.user.id, this.props.username, this.props.password, this.props.name);
        this.setState({ editUsername: false })
    }

    handlePassword = () => {
        if (this.state.editPassword === false) {
            this.setState({ editPassword: true })
        } else {
            this.setState({ editPassword: false })
        }
    }

    updatePassword = () => {
        this.props.editUserProfile(this.props.user.id, this.props.username, this.props.password, this.props.name);
        this.setState({ editPassword: false })
    }

    handleName = () => {
        if (this.state.editName === false) {
            this.setState({ editName: true })
        } else {
            this.setState({ editName: false })
        }
    }

    updateName = () => {
        this.props.editUserProfile(this.props.user.id, this.props.username, this.props.password, this.props.name);
        this.setState({ editName: false })
    }

    handleChange = e => {
        this.props.updateState({ [e.target.name]: e.target.value })
    }

    // deleteUser = async () => {
    //     await axios.delete(`/api/profile/${this.props.user.id}`);
    //     this.props.updateState({
    //         username: '',
    //         password: '',
    //         name: ''
    //     });
    //     await this.props.userLogout();
    //     this.props.history.push('/');
    // }

    render() {
        return (
            <div className='profile-container'>
                <div className='user-profile'>
                    <h2 className='profile-title'>{this.props.name}'s Profile</h2>
                    {/* <button onClick={this.deleteUser}>Delete Account</button> */}
                </div>
                <div className='box-container'>
                    <div className='edit-container'>
                        <ul className='changeDB'>
                            <h4>User's Name: {this.props.name}</h4>
                            <button className='editDB' onClick={this.handleName}>Change Your Name</button>
                            {this.state.editName === true ? <div className='ifClicked'>
                                <input className='editInputs' placeholder='Change Your Name' name='name' onChange={this.handleChange} />
                                <button className='execute' onClick={this.updateName}>Execute</button>
                            </div> : null}
                        </ul>
                        <ul className='changeDB'>
                            <h4>Username: {this.props.username}</h4>
                            <button className='editDB' onClick={this.handleUsername}>Change Username</button>
                            {this.state.editUsername === true ? <div className='ifClicked'>
                                <input className='editInputs' placeholder='Change Username' name='username' onChange={this.handleChange} />
                                <button className='execute' onClick={this.updateUsername}>Execute</button>
                            </div> : null}

                        </ul>
                        <ul className='changeDB'>
                            <button className='editDB' onClick={this.handlePassword}>Change Password</button>
                            {this.state.editPassword === true ? <div className='ifClicked'>
                                <input className='editInputs' placeholder='Change Password' name='password' onChange={this.handleChange} />
                                <button className='execute' onClick={this.updatePassword}>Execute</button>
                            </div> : null}
                        </ul>
                    </div>
                    <div className='image-container'>
                        <ProfileImage />
                    </div>
                </div>
                {this.props.loggedIn === false ? window.location.href = '/' : null}
            </div>
        )
    }
}

const mapStateToProps = reduxState => {
    return {
        username: reduxState.authReducer.username,
        password: reduxState.authReducer.password,
        name: reduxState.authReducer.name,
        user: reduxState.authReducer.user, 
        loggedIn: reduxState.authReducer.loggedIn
    }
}

export default connect(mapStateToProps, { updateState, editUserProfile, userLogout })(Profile);