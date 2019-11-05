import React, {Component} from 'react';
import axios from 'axios';
import { resetInputs, updateState } from '../../donald ducks/AuthReducer/AuthReducer';
import { connect } from 'react-redux';

class SignUp extends Component {

    state = {
        error: false
    }

    clickGoBack = () => {
        this.props.resetInputs();
        this.props.history.push('/');
    }

    handleChange = e => {
        this.props.updateState({[e.target.name]: e.target.value})
    }

    registerUser = e => {
        e.preventDefault();
        axios.post('/auth/register', {
            username: this.props.username,
            password: this.props.password,
            name: this.props.name
        })
        .then(() => {
            this.props.history.push('/');
        })
        .catch(() => {
            this.setState({error: true});
        })
    }

    render() {
        // console.log(this.props.username)
        return (
            <div className='register'>
                <form className='register-form' type='submit'>
                    <input className='register-field' placeholder='Full Name' name='name' onChange={this.handleChange}></input>
                    <input className='register-field' placeholder='Create Username' name='username' onChange={this.handleChange}></input>
                    <input className='register-field' type="password" placeholder='Create Password' name='password' onChange={this.handleChange}></input>
                    <button onClick={this.registerUser}>Sign Up!</button>
                    <button onClick={this.clickGoBack}>Go Back</button>
                </form>
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

export default connect(mapStateToProps, {resetInputs, updateState})(SignUp);