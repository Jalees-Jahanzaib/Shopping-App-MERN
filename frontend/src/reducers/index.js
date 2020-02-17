import { combineReducers } from 'redux';
import productreducer from './productreducer'

import user from './user_reducer';
import chats from './chat_reducer';
const rootReducer = combineReducers({
    user,
    chats,
    items: productreducer
})
export default rootReducer;