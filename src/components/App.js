//import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MapSnapshot from './MapSnapshot';

export default function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<MapSnapshot />} />
        </Routes>
      </div>
    </Router>
  );
}