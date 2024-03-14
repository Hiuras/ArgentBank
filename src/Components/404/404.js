import React from 'react';
import logo from '../../assets/argentBankLogo.png';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import Footer from '../../Ressources/Footer/Footer';
import './404.css'

function Error() {
    return (
        <div>
        <div className="banner">
            <nav className="main-nav">
                <Link to='/' className='main-nav-logo'>
                    <img 
                        src={logo} 
                        alt="logo du site"
                        className="main-nav-logo-image"
                    />
                    <h1 className="sr-only">Argent Bank</h1>
                </Link>
                <div>
                    <Link to='/signIn' className="main-nav-item">
                        <FontAwesomeIcon icon={faUserCircle} />
                        SignIn
                    </Link>
                </div>
            </nav>
        </div>
        <div className='main--Error'>
            <h1>404</h1>
            <h2>Page non trouvée</h2>
            <Link to='/' className='redirect'>
                <h3>Retourner a la page d'accueil</h3>
            </Link>
        </div>
        <Footer />
        </div>
    );
}

export default Error;
