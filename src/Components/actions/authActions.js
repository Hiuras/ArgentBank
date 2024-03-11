export const setUsername = (username) => ({
  type: 'SET_USERNAME',
  payload: username
});

export const setPassword = (password) => ({
  type: 'SET_PASSWORD',
  payload: password
});

export const setRememberMe = (rememberMe) => ({
  type: 'SET_REMEMBER_ME',
  payload: rememberMe
});

export const setError = (error) => ({
  type: 'SET_ERROR',
  payload: error
});