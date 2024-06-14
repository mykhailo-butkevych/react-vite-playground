import './App.css'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import AutoHidingStickyNav from './pages/auto-hiding-sticky-nav';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sticky-nav" element={<AutoHidingStickyNav />} />
      </Routes>
    </div>
  )
}

export default App
