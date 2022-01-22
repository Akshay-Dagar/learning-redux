import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from "./reducers/index.js"

const initialState = {};
const middleware = [thunk];

const store = createStore(rootReducer, 
                          initialState, 
                          compose(
                                applyMiddleware(...middleware),
                                window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
                        ));           //rootReducer is in index.js in reducers folder

export default store;