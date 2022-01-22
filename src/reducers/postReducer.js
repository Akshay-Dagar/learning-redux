import { FETCH_POSTS, NEW_POST } from "../actions/types.js";

const initialState = {
    items: [],
    item: {}
}

export default (state = initialState, action) => {
    switch(action.type) {
        case FETCH_POSTS:
            return {
                ...state,
                items : action.payload
            }                                     //returns a new state with state.items = payload and rest of values in the state same as before.
        case NEW_POST:
            return {
                ...state,
                item : action.payload
            } 
        default:
            return state;                         //in case of no action performed or action not a valid one, returns whatever the current state is as it is.
    }
}