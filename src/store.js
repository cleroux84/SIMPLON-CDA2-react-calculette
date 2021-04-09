
import {combineReducers, createStore, applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import calcReducer from "./reducers/calcReducer";
import thunk from 'redux-thunk';

const composeEnhancers = composeWithDevTools({
    // Specify name here, actionsBlacklist, actionsCreators and other options if needed
});

const middleware = [
    thunk
];
let store = createStore(combineReducers({calcReducer}),
    composeEnhancers(
        applyMiddleware(...middleware),
    )
);
export default store;