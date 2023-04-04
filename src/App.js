/** @format */

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './Pages/login';
import ContentPage from './Pages/contentPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/content' element={<ContentPage />} />
      </Routes>
    </Router>
  );
}

export default App;
