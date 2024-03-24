import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomeScreen } from '../Screens/Home/Home';
export function Navigation() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
      </Routes>
    </Router>
  );
}
