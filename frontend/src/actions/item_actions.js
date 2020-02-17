import { GET_ITEMS, DELETE_ITEMS, ADD_ITEMS } from './../actions/types'

export const get_items = () => {
    return {
        type: GET_ITEMS

    }
}
export const delete_item = (id) => {
    return {
        type: DELETE_ITEMS,
        payload: id

    };

}
