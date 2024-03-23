import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
export function Navigation() {
  return (
    <Router>
      <Routes>
        {/* Define your routes here */}
        <Route path="/" element={<></>} />
        <Route path="/about" element={<></>} />
      </Routes>
    </Router>
  );
}
