import uuid from 'uuid';
import { GET_ITEMS, DELETE_ITEMS, ADD_ITEMS } from './../actions/types'
const initialState = {

    items: [{
        id: uuid(),
        name: "Sucide ",
        seller: "Sellers of Death",
        price: "100",
        quantity: 105,
        minimum: 50,


    },
    {
        id: uuid(),
        name: "Death ",
        seller: "Killer",
        price: "100",
        quantity: 300,
        minimum: 50,

    }]
}
export default function (state = initialState, action) {
    switch (action.type) {
        case GET_ITEMS:
            return {
                ...state
            }
        case DELETE_ITEMS:
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload)
            }
        default:
            return state;
    }
}