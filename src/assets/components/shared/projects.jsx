import ProjectCard from "./projectCard";
import SecondaryBTN from "../shared/secondaryBtn";
import authImg from '../../images/authentication.jpg';
import dealershipImg from '../../images/dealership.jpg';
import databaseImg from '../../images/database.jpg';
import libraryImg from '../../images/library.jpg';

const projects = [
  {
    title: "Authentication",
    category: 'Backend API',
    url: "projects/url1",
    imageUrl: authImg,
    description: "Designed and developed a NodeJS scalable, adaptive authentication API..."
  },
  {
    title: "Dealership",
    category: 'e-Commerce',
    url: "projects/url2",
    imageUrl: dealershipImg,
    description: "Designed and developed a full-stack dealership application..."
  },
  {
    title: "Mongo Database Adapter",
    category: 'Database',
    url: "projects/url3",
    imageUrl: databaseImg,
    description: "Designed and developed a MongoDB database layer..."
  },
  {
    title: "Dummy-Dom Library",
    category: 'Library',
    url: "projects/url4",
    imageUrl: libraryImg,
    description: "Designed and developed a DOM manipulation library..."
  }
];


export default function Projects() {
  return (
    <div className="px-4 md:px-0 -z-10 my-8 md:my-0 ">
        <div className=" md:w-4/5">
            <h1 className="text-6xl font-bold md:font-extrabold">FEATURED PROJECTS</h1>
            <p className="my-8">These selected projects reflect my passion for blending modularity, scalability, and reusability with creative problem-solving. Each codebase is designed with future adaptability in mind — a balance of complexity management and thoughtful architecture that solves real-world challenges.</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="h-[300vh] mb-8" >
            {projects.map((project, i) => (
              <ProjectCard key={i} category={project.category} url={project.url} description={project.description} title={project.title} imageUrl={project.imageUrl} index={i} />
            ))}
      
          </div>
          <SecondaryBTN href='#' text='BROWSE ALL PROJECTS'/>
        </div>
        
    </div>
  );
}
