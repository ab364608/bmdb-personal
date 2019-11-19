import React, {Component} from 'react';
import axios from 'axios';
import { resetInputs, updateState, userLogin } from '../../donald ducks/AuthReducer/AuthReducer';
import { connect } from 'react-redux';
import './SignUp.scss'

class SignUp extends Component {


    clickGoBack = () => {
        this.props.resetInputs();
        this.props.history.push('/');
    }

    handleChange = e => {
        this.props.updateState({[e.target.name]: e.target.value})
    }

    registerUser = async e => {
        e.preventDefault();
        await axios.post('/auth/register', {
            username: this.props.username,
            password: this.props.password,
            name: this.props.name
        });
        await this.props.userLogin(this.props.username, this.props.password, this.props.loggedIn)
        this.props.history.push('/');
    }

    render() {
        // console.log(this.props.username)
        return (
            <div className="signup-background">
            <div className='below__nav'>
                <form className='register-form' type='submit'>
                    <div className='register-inputs'>
                    <input className='register-field' placeholder='Full Name' name='name' onChange={this.handleChange}></input>
                    <input className='register-field' placeholder='Create Username' name='username' onChange={this.handleChange}></input>
                    <input className='register-field' type="password" placeholder='Create Password' name='password' onChange={this.handleChange}></input>
                    </div>
                    <div className='register-actions'>
                    <button className='register-buttons' onClick={this.clickGoBack}>Go Back</button>
                    <button className='register-buttons' onClick={this.registerUser}>Sign Up!</button>
                    </div>
                </form>
            </div>
            {/* {this.props.loggedIn === true ? window.location.href='/' && alert('Do Not Log In While on the Sign Up Page') : null} */}
            </div>
        )
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

export default connect(mapStateToProps, {resetInputs, updateState, userLogin})(SignUp);