import { HashRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import AboutMePage from "./pages/AboutMePage";
import Projectpage from "./pages/ProjectPage";
// import ProjectProvider from './contexts/projectsContext'

function App() {
  return (
    // <ProjectProvider>
      <HashRouter>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="about" element={<AboutMePage />} />
          <Route path="projects" element={<Projectpage />} />
        </Routes>
      </HashRouter>
    // </ProjectProvider>
      
  );
}

export default App;
