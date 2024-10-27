import { projects } from "@/lib/projects";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import ProjectItem from "./ItemsProjectHero";

export default function HeroRight() {
  return (
    <div id="projects" className="flex flex-col justify-between gap-4">
      <div className="prose">
        <h1 className="font-barlowCondensed text-center text-3xl lg:text-xl mb-8 lg:mb-auto">My Projects</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {projects
          .filter((item) => item.imagePath)
          .map((item, i) => (
            <ProjectItem key={i} item={item} />
          ))}
      </div>
      <div className="flex justify-center">
        <Button variant="link">
          <Link to="/projects">View all projects</Link>
        </Button>
      </div>
    </div>
  );
}
