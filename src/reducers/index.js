import { combineReducers } from "redux";
import postReducer from "./postReducer.js";

export default combineReducers({
    posts: postReducer,               //"posts" is a state that will be handled by postReducer. postReducer will return this state
})

//combineReducers will combine all reducers into a single one that can be passed to redux store.
