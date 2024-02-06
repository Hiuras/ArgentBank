import React from "react";
import { Link } from "react-router-dom";
import logo from '../assets/argentBankLogo.png';
import chat from '../assets/icon-chat.png'
import money from '../assets/icon-money.png'
import security from '../assets/icon-security.png'
import '../Styles/Styles.css';

function SignIn() {
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
                <i class="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                <form>
                    <div className="input-wrapper">
                    <label for="username">Username</label>
                    <input type="text" id="username" />
                    </div>
                    <div className="input-wrapper">
                    <label for="password">Password</label>
                    <input type="password" id="password" />
                    </div>
                    <div className="input-remember">
                    <input type="checkbox" id="remember-me" />
                    <label for="remember-me">Remember me</label>
                    </div>
                </form>
                </section>
            </main>
            <footer className="footer">
                <p className="footer-text">Copyright 2020 Argent Bank</p>
            </footer>
        </div>
    )
}

export default SignIn;
