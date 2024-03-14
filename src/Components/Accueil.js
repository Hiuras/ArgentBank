import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux"; // Import the useSelector hook
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/argentBankLogo.png';
import chat from '../assets/icon-chat.png'
import money from '../assets/icon-money.png'
import security from '../assets/icon-security.png'
import Footer from "../Ressources/Footer/Footer";
import '../Styles/Styles.css';

function Accueil() {
  const user = useSelector(state => state.user); // Access state from Redux store

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
            <i className="fa-solid fa-circle-user"></i>
            signIn
            </Link>
          </div>
        </nav>
        <main>
          <div className="hero">
            <section className="hero-content">
              <h2 className="sr-only">Promoted content</h2>
              <p className="subtitle">No fees.</p>
              <p className="subtitle">No minimum deposit.</p>
              <p className="subtitle">High interest rates.</p>
              <p className="text">Open a savings account with Argent Bank today!</p>
            </section>
          </div>
          <section className="features">
            <h2 className="sr-only">Features</h2>
            <div className="feature-item">
              <img src={chat} alt="chat icon" className="feature-icon" />
              <h3 className="feature-item-title">You are our #1 priority</h3>
              <p>
              Need to talk to a representative? You can get in touch through our
            24/7 chat or through a phone call in less than 5 minutes.
              </p>
            </div>
            <div className="feature-item">
              <img src={money} alt="chat Icon" className="feature-icon" />
              <h3 className="feature-item-title">
              More savings means higher rates
              </h3>
              <p>
                The more you save with us, the higher interest rate will be ! 
              </p>
            </div>
            <div className="feature-item">
              <img src={security} alt="chat icon" className="feature-icon"/>
              <h3 className="featur-item-title">
              Security you can trust
              </h3>
              <p>
              We use top of the line encryption to make sure your data and money
            is always safe.
              </p>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default Accueil;
