import { createSlice } from "@reduxjs/toolkit";

// État initial pour l'utilisateur
const userInitialState = {
    email: null, // Adresse e-mail de l'utilisateur
    firstName: null, // Prénom de l'utilisateur
    lastName: null, // Nom de famille de l'utilisateur
    id: null, // Identifiant de l'utilisateur
    error: null, // Erreur éventuelle liée à l'utilisateur
}

// Slice pour la gestion de l'utilisateur
const userSlice = createSlice({
    name: "user",
    initialState: userInitialState,
    reducers: {
        // Action en cas de succès de récupération des informations utilisateur
        userSuccess: (state, action) => {
            state.email = action.payload.body.email; // Adresse e-mail
            state.firstName = action.payload.body.firstName; // Prénom
            state.lastName = action.payload.body.lastName; // Nom de famille
            state.id = action.payload.body.id; // Identifiant
            state.error = null; // Réinitialisation de l'erreur
        },
        // Action en cas d'échec de récupération des informations utilisateur
        userFail: (state, action) => {
            // Réinitialisation des informations utilisateur et stockage de l'erreur
            state.email = null;
            state.firstName = null;
            state.lastName = null;
            state.id = null;
            state.error = action.payload.message;
        },
        // Action de déconnexion de l'utilisateur
        userLogout: (state) => {
            // Réinitialisation des informations utilisateur et de l'erreur
            state.email = null;
            state.firstName = null;
            state.lastName = null;
            state.id = null;
            state.error = null;
        },
        // Action en cas de succès de la mise à jour des informations utilisateur
        userUpdateSuccess: (state, action) => {
            // Mise à jour des informations utilisateur avec succès
            state.email = action.payload.body.email;
            state.firstName = action.payload.body.firstName;
            state.lastName = action.payload.body.lastName;
            state.id = action.payload.body.id;
            state.error = null; // Réinitialisation de l'erreur
        },
        // Action en cas d'échec de la mise à jour des informations utilisateur
        userUpdateFail: (state, action) => {
            // Mise à jour des informations utilisateur avec l'erreur
            state.email = action.payload.body.email;
            state.firstName = action.payload.body.firstName;
            state.lastName = action.payload.body.lastName;
            state.id = action.payload.body.id;
            state.error = action.payload.message; // Stockage de l'erreur
        }
    }
})

// Export des actions et du réducteur
export const { userSuccess, userFail, userLogout, userUpdateSuccess, userUpdateFail } = userSlice.actions;

export const userReducer = userSlice.reducer;
