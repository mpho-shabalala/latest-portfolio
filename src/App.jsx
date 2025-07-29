import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProjectProvider } from "./contexts/projectsContext";
import Homepage from "./pages/Homepage";
import AboutMePage from "./pages/AboutMePage";

function App() {
  return (
    <ProjectProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="about-me" element={<AboutMePage />} />
        </Routes>
      </BrowserRouter>
    </ProjectProvider>
      
  );
}

export default App;
