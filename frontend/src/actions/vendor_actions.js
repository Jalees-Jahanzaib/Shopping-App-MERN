import axios from 'axios';
import {
    LOGIN_VENDOR,
    REGISTER_VENDOR

} from './types.js';

export function loginV(datatoSubmit) {
    const request = axios.post('/api/vendor/login', datatoSubmit).then(
        response => response.data
    )
    return {
        type: LOGIN_VENDOR,
        payload: request
    }

}

export function registerV(datatoSubmit) {
    const request = axios.post('/api/vendor/register', datatoSubmit).then(
        response => response.data
    )
    return {
        type: REGISTER_VENDOR,
        payload: request
    }

}

