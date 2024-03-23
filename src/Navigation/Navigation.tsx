import { loadavg } from 'os';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
export function Navigation() {
  const [location, setLocation] = useState<any>(null);

  console.log(location.latitude, location.longitude);

  useEffect(() => {
    if (!navigator.geolocation) {
      return;
    }

    const onSuccess = (position: any) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      setLocation({ latitude, longitude });
    };

    navigator.geolocation.getCurrentPosition(onSuccess);
  }, []);

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
