import { Link } from 'react-router-dom';
import logo from '../../assets/argentBankLogo.png';
import '../../Styles/Styles.css';

function Nav() {
    return (
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
    )
}

export default Nav