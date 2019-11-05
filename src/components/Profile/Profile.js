import React, {Component} from 'react';
// import axios from 'axios';
import { connect } from 'react-redux';
import './Profile.css';
import { updateState } from '../../donald ducks/AuthReducer/AuthReducer';

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
        this.setState({editUsername: true});
    }
    
    updateUsername = () => {

        this.setState({editUsername: false})
    }

    handlePassword = () => {
        this.setState({editPassword: true});
    }

    updatePassword = () => {

        this.setState({editPassword: false})
    }

    handleName = () => {
        this.setState({editName: true});
    }

    updateName = () => {

        this.setState({editName: false})
    }

    handleChange = e => {
        this.props.updateState({[e.target.name]: e.target.value})
    }
    
    
    
    render() {
        console.log(this.props)
        return (
            <div className='profile-container'>
                <div>
                <h2 className='profile-title'>{this.props.name}'s Profile</h2>
                </div>
                <div>
                <ul>
                    <h4>Username: {this.props.username}</h4>
                    <button onClick={this.handleUsername}>Change Username</button>
                    {this.state.editUsername === true ? <div>
                        <input placeholder='Change Username' name='username' onChange={this.handleChange} />
                        <button onClick={this.updateUsername}>Execute</button>
                    </div> : null}

                </ul>
                <ul>
                    <h4>Password: {this.props.password}</h4>
                    <button onClick={this.handlePassword}>Change Password</button>
                    {this.state.editPassword === true ? <div>
                        <input placeholder='Change Password' name='password' onChange={this.handleChange} />
                        <button onClick={this.updatePassword}>Execute</button>
                    </div> : null}
                </ul>
                <ul>
                    <h4>User's Name: {this.props.name}</h4>
                    <button onClick={this.handleName}>Change Your Name</button>
                    {this.state.editName === true ? <div>
                        <input placeholder='Change Your Name' name='name' onChange={this.handleChange} />
                        <button onClick={this.updateName}>Execute</button>
                    </div> : null}
                </ul>
                </div>
            </div>
        )
    }
}

const mapStateToProps = reduxState => {
    return {
    username: reduxState.authReducer.username,
    password: reduxState.authReducer.password,
    name: reduxState.authReducer.name
    }
}

export default connect(mapStateToProps, {updateState})(Profile);