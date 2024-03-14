import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Nav from '../../Ressources/Nav/Nav';
import Form from '../../Ressources/Form/Form';
import Footer from '../../Ressources/Footer/Footer';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import '../../Styles/Styles.css';

function SignIn(props) {
  return (
    <div>
      <Nav />
      <main className="main bg-dark">
        <Form />
      </main>
      <Footer />
    </div>
  );
}

export default SignIn;
