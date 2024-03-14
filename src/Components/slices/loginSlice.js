import { createSlice } from "@reduxjs/toolkit";

// État initial pour la connexion
const loginState = {
    token: localStorage.getItem("token"), // Récupère le token depuis le stockage local
    isAuth: false, // Indique si l'utilisateur est authentifié
    error: null, // Stocke les éventuelles erreurs de connexion
    logoClick: null, // Indique si le logo a été cliqué 
}

// Slice pour la gestion de la connexion
const loginSlice = createSlice({
    name: "login", // Nom du slice
    initialState: loginState, // État initial
    reducers: {
        // Action en cas de succès de la connexion
        loginSuccess: (state, action) => {
            state.token = action.payload.body.token; // Stocke le token dans l'état
            state.isAuth = true; // L'utilisateur est authentifié
            state.error = null; // Réinitialise les éventuelles erreurs
        },
        // Action en cas d'échec de la connexion
        loginFail: (state, action) => {
            state.token = null; // Réinitialise le token
            state.isAuth = false; // L'utilisateur n'est pas authentifié
            state.error = action.payload; // Stocke l'erreur de connexion
        },
        // Action de déconnexion réussie
        logoutSuccess: (state) => {
            state.token = null; // Réinitialise le token
            state.isAuth = false; // L'utilisateur n'est pas authentifié
            state.error = null; // Réinitialise les éventuelles erreurs
        },
        // Action pour indiquer que le token est présent
        isToken: (state) => {
            state.isAuth = true; // Définit que l'utilisateur est authentifié
        },
        // Action pour indiquer que le logo a été cliqué
        logoClick: (state) => {
            state.logoClick = true; // Indique que le logo a été cliqué
        }
    }
});

// Exporte les actions du slice de connexion
export const { loginSuccess, loginFail, logoutSuccess, isToken, logoClick } = loginSlice.actions;

// Exporte le réducteur de connexion
export const loginReducer = loginSlice.reducer;
