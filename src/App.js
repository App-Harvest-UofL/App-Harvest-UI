/** @format */

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './Pages/login';
import ContentPage from './Pages/contentPage';
import RegisterPage from './Pages/register';
import ForgotPasswordPage from './Pages/forgotPassword';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/contentPage' element={<ContentPage />} />
        <Route path='/registerPage' element={<RegisterPage />} />
        <Route path='/forgotPasswordPage' element={<ForgotPasswordPage />} />
      </Routes>
    </Router>
  );
}

export default App;
