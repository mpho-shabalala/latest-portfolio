import { HashRouter, Routes, Route } from "react-router-dom";
import { ProjectProvider } from "./contexts/projectsContext";
import Homepage from "./pages/Homepage";
import AboutMePage from "./pages/AboutMePage";

function App() {
  return (
    <ProjectProvider>
      <HashRouter>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="about" element={<AboutMePage />} />
        </Routes>
      </HashRouter>
    </ProjectProvider>
      
  );
}

export default App;
