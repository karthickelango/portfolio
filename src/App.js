import Navbar from './component/Navbar';
import { Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Home  from './pages/Home';
import Qualification from './pages/Qualification';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Footer from './component/Footer';

function App() {
  return (
    <div className="main-item">
      <Navbar />
      <Routes>
        <Route path="/" element={<About />} title="Home"></Route>
        {/* <Route path="/about" element={<About />} title="About"></Route> */}
        <Route path="/qualification" element={<Qualification />} title="Index Page"></Route>
        <Route path="/skills" element={<Skills />} title="Index Page"></Route>
        <Route path="/projects" element={<Projects />} title="Index Page"></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
