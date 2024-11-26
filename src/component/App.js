import React from 'react';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import Hom from './component/Hom';
import Get from './Get';
import Form from './Form';
import Cal from './cal/Cal';

function App() {
  return (
    <div className="App">

      {/* <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hom />} />
          <Route path="/get" element={<Get/>} />
          <Route path="/form" element={<Form />} />

        </Routes>
      </Router> */}
      <Cal />
    </div>
  );
}

export default App;
