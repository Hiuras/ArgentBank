const initialState = {
  username: '',
  password: '',
  rememberMe: false,
  error: ''
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USERNAME':
      return {
        ...state,
        username: action.payload
      };
    case 'SET_PASSWORD':
      return {
        ...state,
        password: action.payload
      };
    case 'SET_REMEMBER_ME':
      return {
        ...state,
        rememberMe: action.payload
      };
    case 'SET_ERROR':
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};

export default authReducer;
