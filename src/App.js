/** @format */

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './Pages/login';
import ContentPage from './Pages/contentPage';
import RegisterPage from './Pages/register';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/contentPage' element={<ContentPage />} />
        <Route path='/registerPage' element={<RegisterPage />} />
      </Routes>
    </Router>
  );
}

export default App;
