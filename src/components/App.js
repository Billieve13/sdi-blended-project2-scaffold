
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import MapSnapshot from './MapSnapshot';
import ObjectLabelingInfo from './ObjectLabelingInfo';
import AnnotationsPage from './AnnotationsPage';
import Instructions from './Instructions';

export default function App() {

  const navStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '20px',
    background: '#f3f3f3',
    padding: '10px',
    borderRadius: '5px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, .1)'
  };

  const linkStyle = {
    padding: '5px 15px',
    margin: '0 10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    textDecoration: 'none',
    background: '#007bff',
    color: '#fff',
    cursor: 'pointer',
    textAlign: 'center'
  };

  return (
    <Router>
      <div className="App" style={{ margin: '0 auto', maxWidth: '1024px', padding: '1em' }}>
        <nav style={navStyle}>
          <Link to="/" style={linkStyle}>Home</Link>
          <Link to="/Instructions" style={linkStyle}>Instructions</Link>
          <Link to="/map-snapshot" style={linkStyle}>Map Snapshot</Link>
          <Link to="/annotations" style={linkStyle}>Annotations</Link>
        </nav>
        <Routes>
          <Route path="/" element={<ObjectLabelingInfo />} exact />
          <Route path="/Instructions" element={<Instructions />} exact />
          <Route path="/map-snapshot" element={<MapSnapshot />} />
          <Route path="/annotations" element={<AnnotationsPage />} />
        </Routes>
      </div>
    </Router>
  );
}