import { combineReducers } from 'redux';
import productreducer from './productreducer'
import vendor from './vendor_reducer'
import user from './user_reducer';
import chats from './chat_reducer';
const rootReducer = combineReducers({
    user,
    chats,
    items: productreducer,
    vendor
})
export default rootReducer;