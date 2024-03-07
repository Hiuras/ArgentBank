import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/argentBankLogo.png';
import chat from '../assets/icon-chat.png';
import money from '../assets/icon-money.png';
import security from '../assets/icon-security.png';
import '../Styles/Styles.css';

function SignIn(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        const storedUsername = localStorage.getItem('username');
        const storedPassword = localStorage.getItem('password');
        const storedRememberMe = localStorage.getItem('rememberMe');

        if (storedUsername && storedRememberMe === 'true') {
            setUsername(storedUsername);
            setPassword(storedPassword);
            setRememberMe(true);
        }
    }, []);

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleRememberMeChange = () => {
        setRememberMe(!rememberMe);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (rememberMe) {
                localStorage.setItem('username', username);
                localStorage.setItem('password', password);
                localStorage.setItem('rememberMe', rememberMe);
            } else {
                localStorage.removeItem('username');
                localStorage.removeItem('password');
                localStorage.removeItem('rememberMe');
            }

            // Reste du code pour la soumission du formulaire
        } catch (error) {
            console.error('Erreur lors de la connexion :', error);
            setError('Erreur lors de la connexion');
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
                            value={username} 
                            onChange={handleUsernameChange} 
                        />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password" 
                            id="password" 
                            value={password} 
                            onChange={handlePasswordChange} 
                        />
                    </div>
                    <div className="input-remember">
                        <input 
                            type="checkbox" 
                            id="remember-me" 
                            checked={rememberMe} 
                            onChange={handleRememberMeChange}
                        />
                        <label htmlFor="remember-me">Remember me</label>
                    </div>
                    <button className="sign-in-button" type="submit">Sign In</button>
                </form>
                {error && <p className="error-message">{error}</p>}
                </section>
            </main>
            <footer className="footer">
                <p className="footer-text">Copyright 2020 Argent Bank</p>
            </footer>
        </div>
    )
}

export default SignIn;
