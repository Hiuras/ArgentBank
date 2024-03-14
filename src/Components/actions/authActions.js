import axios from "axios";
import { loginFail, loginSuccess, logoutSuccess, isToken } from "../slices/loginSlice";
import { userFail, userLogout, userSuccess, userUpdateFail, userUpdateSuccess } from "../slices/userSlice";
import { useNavigate } from 'react-router-dom';

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

const BASE_URL = "http://localhost:3001/api/v1";

const getToken = () => {
  const token = localStorage.getItem("token") || sessionStorage.getItem("token");
  return token ? token.slice(1, -1) : null;
};

export const login = (email, password, rememberMe) => dispatch => {
  axios.post(`${BASE_URL}/user/login`, { email, password })
      .then(response => {
          if (response && response.data && response.data.body && response.data.body.token) {
              const token = JSON.stringify(response.data.body.token);
              rememberMe ? localStorage.setItem("token", token) : sessionStorage.setItem("token", token);
              dispatch(loginSuccess(response.data));
              
              // useNavigate pour rediriger vers la page utilisateur
              const navigate = useNavigate();
              navigate('/User');
          } else {
              dispatch(loginFail("Invalid response from server"));
          }
      })
      .catch(error => {
          // Gérer les erreurs de manière appropriée ici
          dispatch(loginFail(error.response?.data?.message || "An error occurred during login"));
      });
};

export const userProfile = () => dispatch => {
  const token = getToken();
  axios.post(`${BASE_URL}/user/profile`, { token }, { headers: { "Authorization": `Bearer ${token}` } })
      .then(response => {
          dispatch(userSuccess(response.data));
          dispatch(isToken());
      })
      .catch(error => {
          dispatch(userFail(error.response));
      });
};
export const updateProfile = (firstName, lastName) => dispatch => {
  const token = getToken();
  axios.put(`${BASE_URL}/user/profile`, { firstName, lastName }, { headers: { "Authorization": `Bearer ${token}` } })
      .then(response => {
          dispatch(userUpdateSuccess(response.data));
      })
      .catch(error => {
          dispatch(userUpdateFail(error.response));
      });
};


export const logout = () => dispatch => {
    sessionStorage.clear();
    localStorage.removeItem('token');
    dispatch(userLogout());
    dispatch(logoutSuccess());
};

const auth_service = { login, logout, userProfile, updateProfile }

export default auth_service