import { GET_ITEMS, DELETE_ITEMS, ADD_ITEMS, ITEMS_LOADING } from './../actions/types'
import axios from 'axios';
export const get_items = () => dispatch => {
    dispatch(setloading)
    axios.get('/api/items').then(
        res => dispatch({
            type: GET_ITEMS,
            payload: res.data
        })
    )

}
export const delete_item = (id) => dispatch => {
    axios.delete(`/api/items/${id}`).then(res => dispatch({
        type: DELETE_ITEMS,
        payload: id
    }))
}
export const add_item = (item) => dispatch => {
    axios.post('/api/items', item).then(
        res => dispatch(
            {
                type: ADD_ITEMS,
                payload: res.data
            })
    )


};
export const setloading = () => {

    return {
        type: ITEMS_LOADING,


    };

}
