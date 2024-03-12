import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { setUsername, setPassword, setRememberMe, setError } from '../actions/authActions';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import logo from '../../assets/argentBankLogo.png';
import '../../Styles/Styles.css';

function SignIn(props) {
  const { username, password, rememberMe, error, setUsername, setPassword, setRememberMe, setError, history } = props;
  const [loading, setLoading] = useState(false); // Ajoutez un état local pour le chargement
  const [localUsername, setLocalUsername] = useState('');
  const [localPassword, setLocalPassword] = useState('');
  const [localRememberMe, setLocalRememberMe] = useState(false);
  
  useEffect(() => {
    // Récupérer les valeurs du stockage local
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');
    const storedRememberMe = localStorage.getItem('rememberMe');
  
    // Mettre à jour l'état local avec les valeurs du stockage local, si elles existent
    if (storedUsername) {
      setLocalUsername(storedUsername);
    }
    if (storedPassword) {
      setLocalPassword(storedPassword);
    }
    if (storedRememberMe) {
      try {
        const parsedRememberMe = JSON.parse(storedRememberMe); // Convertir la chaîne en booléen
        setLocalRememberMe(parsedRememberMe);
      } catch (error) {
        console.error('Erreur lors de l\'analyse de la valeur rememberMe :', error);
      }
    }
  }, []);
  
  const handleUsernameChange = (e) => {
    const newValue = e.target.value;
    setUsername(newValue);
    setLocalUsername(newValue);
    if (localRememberMe) {
      // Si "Remember me" est coché, stockez la nouvelle valeur dans le local storage
      localStorage.setItem('username', newValue);
    }
  };

  const handlePasswordChange = (e) => {
    const newValue = e.target.value;
    setPassword(newValue);
    setLocalPassword(newValue);
    if (localRememberMe) {
      // Si "Remember me" est coché, stockez la nouvelle valeur dans le local storage
      localStorage.setItem('password', newValue);
    }
  };
  const handleRememberMeChange = () => {
    const newValue = !localRememberMe;
    setRememberMe(newValue);
    setLocalRememberMe(newValue);
    if (!newValue) {
      // Si "Remember me" n'est pas coché, effacez les données du local storage
      localStorage.removeItem('username');
      localStorage.removeItem('password');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Activez le chargement lors de la soumission du formulaire
    try {
      const response = await fetch('http://localhost:3001/api/v1/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: username, // Utilisez 'email' au lieu de 'username'
          password,
        }),
      });
      const data = await response.json();
      console.log('Réponse de l\'API :', data);
      
      if (response.ok) {
        const token = data.body.token;
        sessionStorage.setItem('authToken', token); // Stocker le token dans le sessionStorage
        
        // Rediriger vers la page utilisateur
        history.push('/User'); // Utilisez history.push pour rediriger
      }
      else {
        // Affichez un message d'erreur approprié à l'utilisateur
        setError(data.message);
      }
    
      setLoading(false); // Désactivez le chargement après la réception de la réponse
    } catch (error) {
      console.error('Erreur lors de la connexion :', error);
      setError('Erreur lors de la connexion');
      setLoading(false); // Désactivez le chargement en cas d'erreur
    }    
  };

  return (
    <div>
      <nav className="main-nav">
        <Link to="/" className="main-nav-logo">
          <img src={logo} alt="logo" className="main-nav-logo-image" />
          <h1 className="sr-only">Argent Bank</h1>
        </Link>
        <div>
          <Link to="/SignIn" className="main-nav-item">
            SignIn
          </Link>
        </div>
      </nav>
      <main className="main bg-dark">
        <section className="sign-in-content">
          <FontAwesomeIcon icon={faUserCircle} className="sign-in-icon" />
          <h1>Sign In</h1>
          <form onSubmit={handleSubmit}>
            <div className="input-wrapper">
              <label htmlFor="username">Username</label>
              <input 
                type="text" 
                id="username" 
                value={localUsername} 
                onChange={handleUsernameChange} 
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input 
                type="password" 
                id="password" 
                value={localPassword} 
                onChange={handlePasswordChange} 
              />
            </div>
            <div className="input-remember">
              <input 
                type="checkbox" 
                id="remember-me" 
                checked={localRememberMe} 
                onChange={handleRememberMeChange}
              />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            <button className="sign-in-button" type="submit" disabled={loading}>{loading ? 'Loading...' : 'Sign In'}</button>
          </form>
          {error && <p className="error-message">{error}</p>} {/* Affichez le message d'erreur */}
        </section>
      </main>
      <footer className="footer">
        <p className="footer-text">Copyright 2020 Argent Bank</p>
      </footer>
    </div>
  );
}

const mapStateToProps = (state) => ({
    username: state.username,
    password: state.password,
    rememberMe: state.rememberMe,
    error: state.error
});

const mapDispatchToProps = {
  setUsername,
  setPassword,
  setRememberMe,
  setError
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
