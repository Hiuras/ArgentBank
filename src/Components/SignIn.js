import React, { useState } from "react";
import { connect } from "react-redux"; // Importez connect depuis react-redux
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/argentBankLogo.png';
import chat from '../assets/icon-chat.png'
import money from '../assets/icon-money.png'
import security from '../assets/icon-security.png'
import '../Styles/Styles.css';

function SignIn(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3001/api/v1/user/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password })
            });
            if (response.ok) {
                // Connexion réussie, redirigez ou faites ce que vous voulez
                console.log('Connexion réussie !');
            } else {
                // Connexion échouée
                setError('Identifiants incorrects');
            }
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
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                <form onSubmit={handleSubmit}>
                    <div className="input-wrapper">
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" />
                    </div>
                    <div className="input-wrapper">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" />
                    </div>
                    <div className="input-remember">
                    <input type="checkbox" id="remember-me" />
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

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.isLoggedIn,
        user: state.user
    };
};

export default connect(mapStateToProps)(SignIn);
