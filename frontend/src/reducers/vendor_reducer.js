import { LOGIN_VENDOR } from './../actions/types.js';
export default function (state = {}, action) {

    switch (action.type) {
        case LOGIN_VENDOR:
            return { ...state, loginSucess: action.payload }
        default:
            return state;
    }

}