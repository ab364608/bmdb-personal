import axios from 'axios'


const initialState = {
    username: '',
    password: '',
    name: '',
    loading: false,
    user: {},
    loggedIn: false
}

const UPDATE_STATE = 'UPDATE_STATE';
const RESET_INPUTS = 'RESET_INPUTS';
const USER_LOGIN = 'USER_LOGIN';
const USER_LOGOUT = 'USER_LOGOUT';

export const updateState = e => {
    return {
        type: UPDATE_STATE,
        payload: e
    };
};

export const resetInputs = () => {
    return {
        type: RESET_INPUTS
    }
}

export const userLogin = (username, password) => {
    return {
        type: USER_LOGIN,
        payload: axios.post('/auth/login', {
            username,
            password
        })
    }
}

export const userLogout = () => {
    return {
        type: USER_LOGOUT,
        payload: axios.get('/auth/logout')
    }
}

export default function authReducer(state = initialState, action) {
    const { payload, type } = action;

    switch (type) {
        case UPDATE_STATE:
            return { ...state, ...payload };
        case RESET_INPUTS:
            return { ...state };
        case `${USER_LOGIN}_PENDING`:
            return { ...state, loading: true };
        case `${USER_LOGIN}_FULFILLED`:
            return { ...state, loading: false, user: payload.data, name: payload.data.name, loggedIn: true };
        case `${USER_LOGOUT}_PENDING`:
            return { ...state, loading: true };
        case `${USER_LOGOUT}_FULFILLED`:
            return { ...state, loading: false, user: {}, loggedIn: false }

        default:
            return state;
    }
}