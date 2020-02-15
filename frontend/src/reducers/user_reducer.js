import { LOGIN_USER } from './../actions/types.js';
export default function (state = {}, action) {

    switch (action.type) {
        case LOGIN_USER:
            return { ...state, loginSucess: action.payload }
        default:
            return state;
    }

}