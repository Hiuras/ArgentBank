import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Nav from '../Ressources/Nav/Nav'
import Header from '../Ressources/Header/Header';
import Account from '../Ressources/Account/Account';
import { userProfile } from './actions/authActions';

function User(props) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const token = useSelector(state => state.login.token || sessionStorage.getItem('token'));
  
    useEffect(() => {
      document.title = "Argent Bank - User Page";
      dispatch(userProfile(token));
    }, [dispatch, token]);
  
    useEffect(() => {
      if (token === null) {
        navigate('/');
        sessionStorage.clear();
      }
    }, [token, navigate]);
  
    return (
      <>
        <Nav />
        {token && (
          <main className='main bg-dark'>
            <Header />
            <h2 className="sr-only">Accounts</h2>
            <Account title='Argent Bank Checking (x8349)' amount='$2,082.79' description='Available Balance'/>
            <Account title='Argent Bank Savings (x6712)' amount='$10,928.42' description='Available Balance'/>
            <Account title='Argent Bank Credit Card (x8349)' amount='$184.30' description='Current Balance'/>
          </main>
        )}
      </>
    );
  };

export default User;
