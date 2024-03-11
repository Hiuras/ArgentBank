import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import App from './Components/App.js';
import SignIn from './Components/SignIn/SignIn.js';
import User from './Components/User.js';
import Error from './Components/404/404.js';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/User" element={<User />} />
        <Route path='/Error' element={<Error />} />
      </Routes>
    </Router>
  );
};
  
  export default AppRoutes;