import './App.css'
import Home from'./pages/home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './component/Navbar';
import Social from './component/Socail';
import Portfolio from './pages/Portfolio';
import Service from './pages/Service';


function App() {
  return (
    <>
    <Router>
      <Navbar />
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/Service" element={<Service />} />
      </Routes>
      
      <Social />
    </Router>

  
    </>
  );
}

export default App;
