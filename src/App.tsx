import { Route, Routes } from 'react-router-dom';
import About from './pages/about/About';
import Home from './pages/home/Home';
import Projects from './pages/project/Projects';
import Skills from './pages/skills/Skills';

function App() {
  return (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/projects" element={<Projects />} />
    <Route path="/skills" element={<Skills />} />
  </Routes>
  );
}

export default App;
