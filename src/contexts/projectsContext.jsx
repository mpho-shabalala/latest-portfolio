import { createContext, useState } from 'react';
import { projects as initialProjects } from '../data/projects';

export const ProjectContext = createContext();

export function ProjectProvider({ children }) {
  const [projects, setProjects] = useState(initialProjects);

  //for admin
//   const addProject = (project) => setProjects(prev => [...prev, project]);
//   const removeProject = (id) => setProjects(prev => prev.filter(p => p.id !== id));

  return (
    <ProjectContext.Provider value={{ projects }}>
      {children}
    </ProjectContext.Provider>
  );
}
