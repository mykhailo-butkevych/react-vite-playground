import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import StickyNavPage from './pages/sticky-nav-page';
import CustomModalPage from './pages/custom-modal-page';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sticky-nav" element={<StickyNavPage />} />
        <Route path="/custom-modal" element={<CustomModalPage />} />
      </Routes>
    </div>
  )
}

export default App
