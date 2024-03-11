import { createStore, combineReducers } from 'redux';
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
  

const store = createStore(rootReducer);

export default store;
