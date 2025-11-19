import { HashRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import AboutMePage from "./pages/AboutMePage";
import Projectpage from "./pages/ProjectPage";
import Blogpage from "./pages/BlogPage"
import BlogpageID from "./pages/BlogPageID";
import { BlogsProvider } from "./contexts/blogsContext";
import ScrollToTop from "./assets/components/shared/scrollToTop";
// import ProjectProvider from './contexts/projectsContext'

function App() {
  return (
    // <ProjectProvider>
    <BlogsProvider>
      <HashRouter>
          <ScrollToTop/>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="about" element={<AboutMePage />} />
          <Route path="projects" element={<Projectpage />} />
          
            <Route path="blogs" element={<Blogpage />} />
            <Route path="blogs/:blogID" element={<BlogpageID />} />   
          
        </Routes>
      </HashRouter>
      </BlogsProvider>
    // </ProjectProvider>
      
  );
}

export default App;
