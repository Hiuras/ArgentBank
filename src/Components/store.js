import { createStore, combineReducers, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk';
import authReducer from './reducers/authReducer';

const initialState = {
    isLoggedIn: false,
    user: null,
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                isLoggedIn: true,
                user: action.payload.user
            };
        case 'LOGOUT':
            return {
                ...state,
                isLoggedIn: false,
                user: null
            };
        default:
            return state;
    }
};

export const login = (user) => ({
    type: 'LOGIN',
    payload: {
        user
    }
});

export const logout = () => ({
    type: 'LOGOUT'
});

// Combine reducers if you have multiple reducers
const rootReducerCombined = combineReducers({
    auth: rootReducer,
    // Add other reducers here if needed
});

// Apply Redux Thunk middleware when creating the store
const store = createStore(rootReducerCombined, applyMiddleware(thunk));

export default store;