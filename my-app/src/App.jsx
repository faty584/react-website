import './App.css'
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './component/Navbar';
import Social from './component/Socail';
import Portfolio from './pages/Portfolio';
import Service from './pages/Service';
import Contact from './pages/Contact.jsx';

function App() {
  return (
    <>
    <Router>
      <Navbar />
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/Services" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      
      <Social />
    </Router>

  
    </>
  );
}

export default App;
