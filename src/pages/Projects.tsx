import ProjectBox from "../components/ProjectBox";
import { projects } from "../assets/data.tsx";

export default () => {
  return (
    <div>
      <h2 className="text-2xl mb-5 font-bold">My Projects</h2>
      <div className="px-2 sm:px-20 flex flex-col gap-6">
        {projects.map((project, index) => (
          <ProjectBox key={index} {...project} index={index} />
        ))}
      </div>
    </div>
  );
};
