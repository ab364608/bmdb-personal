import React, { Component } from 'react';
import './ProfileImage.scss';
import { storage } from '../../../firebase-config';
import axios from 'axios';
import { connect } from 'react-redux';


class ProfileImage extends Component {
    constructor() {
        super();

        this.state = {
            profileURL: ''
        }
    }

    componentDidMount =  () => {
        axios.get('/api/profile/img').then( response => {
            this.setState({ profileURL: response.data[0].img })
        })
    }

    handleFirebase = e => {
        if (e.target.files[0]) {
            const img = e.target.files[0];
            const uploadTask = storage.ref(`profile-img/${img.name}`).put(img);
            uploadTask.on('state_changed', () => {
                storage.ref('profile-img').child(img.name).getDownloadURL()
                    .then(url => {
                        this.setState({ profileURL: url })
                    })
            })
        }

    }

    handleImg = async () => {
        await axios.put(`/api/profile/img/${this.props.user.id}`, {
            img: this.state.profileURL
        });
        alert('Profile Image Changed');
    }

    render() {
        console.log(this.state.profileURL)
        return (
            <div className='firebase-container'>
                <h1 className='profile-img-text'>Profile Image</h1>
                <div className='upload-container'>
                    <img className='profile-img' src={this.state.profileURL} alt='Select a Profile Img'></img>
                    <input className='img-input' type='file' onChange={this.handleFirebase} />
                </div>
                <button className='saveChanges' onClick={this.handleImg}>Save Changes</button>
            </div>
        )
    }
}

const mapStateToProps = reduxState => {
    return {
        user: reduxState.authReducer.user
    }
}

export default connect(mapStateToProps)(ProfileImage);