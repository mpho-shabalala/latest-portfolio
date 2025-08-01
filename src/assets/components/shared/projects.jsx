import ProjectCard from "./projectCard";

const projects = [
  {title:"Authentication", url: "projects/url", imageUrl: '/images/authentication.jpg'},
  {title: "Dealership", url: "projects/url", imageUrl: '/images/dealership.jpg' },
  {title: "Mongo Database Adapter", url: "projects/url", imageUrl: '/images/database.jpg'},
 {title: "Dummy-Dom Library", url: "projects/url", imageUrl: '/images/library.jpg'},
//   {title: "Custom Auth System", url: "projects/url", imageUrl: '/images/authentication.jpg'},
];

export default function Projects() {
  return (
    <div>
        <div className=" w-4/5">
            <h1 className="text-6xl font-extrabold">FEATURED PROJECTS</h1>
            <p className="my-8">These selected projects reflect my passion for blending modularity, scalability, and reusability with creative problem-solving. Each codebase is designed with future adaptability in mind — a balance of complexity management and thoughtful architecture that solves real-world challenges.</p>
        </div>
        <div className="h-[300vh]" //adjust the viewport height according to the number of projects
        >
      {projects.map((project, i) => (
        <ProjectCard key={i} url={project.url} title={project.title} imageUrl={project.imageUrl} index={i} />
      ))}
    </div>
    </div>
  );
}
