import ProjectCard from "./projectCard";
import SecondaryBTN from "../shared/secondaryBtn";

const projects = [
  {title:"Authentication",category:'Backend API', url: "projects/url1", imageUrl: '/images/authentication.jpg', 
    description: "Designed and developed a NodeJS scalable, adaptive authentication API, using JWT, and include security measures like, rate limiting, refresh token"
  },
  {title: "Dealership",category:'e-Commerce', url: "projects/url2", imageUrl: '/images/dealership.jpg',
    description: "Designed and developed a full-stack dealership application using React and NodeJS with express" },
  {title: "Mongo Database Adapter",category:'Database', url: "projects/url3", imageUrl: '/images/database.jpg', 
    description: "Designed and developed a mongoDB database layer that is also a framework on its own, has methods that can be easily called by any mongodb compatible server without any hard work, its scalable within the framework and it has built with separation of concerns in mind"
  },
 {title: "Dummy-Dom Library",category:'Library', url: "projects/url4", imageUrl: '/images/library.jpg',
  description: "Designed and developed a dom manipulation library, extract away lower level dom operations into functions that takes attributes as arguments"
 },
//   {title: "Custom Auth System", url: "projects/url", imageUrl: '/images/authentication.jpg'},
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
