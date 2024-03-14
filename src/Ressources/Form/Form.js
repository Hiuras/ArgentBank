import React, { useState, useEffect } from 'react'; 
import { useDispatch, useSelector } from 'react-redux'; // Ajout de useSelector
import { login } from '../../Components/actions/authActions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom'; // Ajout de useNavigate
import authReducer from '../../Components/reducers/authReducer';

function Form() {
    const dispatch = useDispatch();
    const navigate = useNavigate(); // Utilisation de useNavigate pour la navigation

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    // Sélecteurs Redux pour accéder à l'état global
    const token = useSelector((state) => state.login && state.login.token);

    const error = useSelector((state) => state.login && state.login.error);
    

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(login(email, password, rememberMe));
    };

    useEffect(() => {
        if (token !== null || localStorage.getItem('token') !== null) {
          navigate('/User');
        }
      }, [token, navigate]);

    return (
        <section className="sign-in-content">
            <FontAwesomeIcon icon={faUserCircle} className="sign-in-icon" />
            <h1>Sign In</h1>
            <form onSubmit={handleLogin}>
                <div className="input-wrapper">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div className="input-remember">
                    <input
                        type="checkbox"
                        id="remember-me"
                        checked={rememberMe}
                        onChange={(e) => setRememberMe(e.target.checked)}
                    />
                    <label htmlFor="remember-me">Remember me</label>
                </div>
                <button className="sign-in-button" type="submit">Login</button>
            </form>
        </section>
    );
}

export default Form;
