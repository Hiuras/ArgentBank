import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import App from './Components/App.js';
import SignIn from './Components/SignIn.js';
import User from './Components/User.js';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/User" element={<User />} />
      </Routes>
    </Router>
  );
};
  
  export default AppRoutes;