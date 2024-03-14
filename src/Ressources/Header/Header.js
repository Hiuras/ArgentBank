import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import auth_service from '../../Components/actions/authActions';

function Header() {
    // Récupération des données de l'utilisateur depuis le store Redux
  const user = useSelector((state) => state.user);
  // Récupération du prénom et du nom de famille de l'utilisateur depuis le store Redux
  const firstName = useSelector((state) => state.user.firstName);
  const lastName = useSelector((state) => state.user.lastName);
  // État local pour gérer l'affichage du formulaire de modification
  const [edit, showEdit] = useState(false);
  // Dispatch Redux pour effectuer des actions
  const dispatch = useDispatch();
  // Récupération du token d'authentification depuis le store Redux
  const token = useSelector((state) => state.login.token);
  // États locaux pour stocker les nouveaux prénom et nom de famille
  const [newFirstName, setFirstName] = useState('');
  const [newLastName, setLastName] = useState('');

  // Fonction pour soumettre le formulaire de modification
  const submit = (e) => {
    e.preventDefault();
    dispatch(auth_service.updateProfile(newFirstName, newLastName, token));
    showEdit(false); // Masquer le formulaire de modification après la soumission
  }

  // Effet pour charger le profil de l'utilisateur au chargement de la page
  useEffect(() => {
    if (token !== null) {
      dispatch(auth_service.userProfile(token));
    }
  }, [token, dispatch]);

    return (
        <div className="header">
          <h1>Welcome back<br />{edit === false ? firstName + ' ' + lastName : ""}</h1>
          {
            // Affichage du bouton "Edit Name" ou du formulaire de modification en fonction de l'état "edit"
            edit === false ?
              <button className="edit-button" onClick={() => { showEdit(true) }}>Edit Name</button>
              :
              <form className='edit-inputs-buttons' onSubmit={submit}>
                <div className='edit-inputs'>
                  {/* Champs de saisie pour le nouveau prénom et nom de famille */}
                  <input type="text" className='edit-input' onChange={(e) => { setFirstName(e.target.value) }} placeholder={user.firstName} required />
                  <input type="text" className='edit-input' onChange={(e) => { setLastName(e.target.value) }} placeholder={user.lastName} required />
                </div>
                <div className='edit-buttons'>
                  {/* Boutons pour sauvegarder ou annuler la modification */}
                  <button className='edit-button-option' type='submit'>Save</button>
                  <button className='edit-button-option' onClick={() => { showEdit(false) }}>Cancel</button>
                </div>
              </form>
          }
        </div>
      );
    }
    
    export default Header;