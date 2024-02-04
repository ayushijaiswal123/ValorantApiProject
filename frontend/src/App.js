import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Roles from './pages/Roles';
import { Role } from './components/Roles/Role';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/roles' element={<Roles />} />
            <Route exact path='/roles/:role/' element={<Role />}  />
          </Routes>       
        </Router>
    </div>
  );
}

export default App;
