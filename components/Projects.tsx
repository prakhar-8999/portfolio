import RightArrow from "@/icons/RightArrow";
import {projects} from "@/utils/profile";
import {useState} from "react";
import ContentHeader from "./ContentHeader";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  const [start, setStart] = useState(projects.onlyShow);

  return (
    <div>
      <ContentHeader title="Projects" id="projects" />
      <div className="flex justify-center">
        <div className="w-full md:w-[600px] lg:w-[800px] xl:w-[900px] text-center">
          <p className="leading-relaxed text-black dark:text-gray-400 font-medium">
            {projects.description}
          </p>
        </div>
      </div>
      <div className="flex justify-center my-10">
        <div className="w-16 h-1 rounded-full bg-primary inline-flex"></div>
      </div>
      <div className="container px-5 py-24 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-24">
          {projects.projectContent.slice(0, start).map((each, index) => (
            <ProjectsCard {...each} key={index} />
          ))}
        </div>
        <button
          className="flex mx-auto mt-16 text-black bg-primary border-0 py-2 px-8 focus:outline-none hover:bg-primary rounded text-lg z-50"
          style={{zIndex: 1000}}
          onClick={() =>
            setStart(
              start === projects.projectContent.length
                ? projects.onlyShow
                : projects.projectContent.length
            )
          }
        >
          {start === projects.projectContent.length ? (
            <>
              Show Less &nbsp;&nbsp; <RightArrow className="mt-2 -rotate-90" />
            </>
          ) : (
            <>
              Show More &nbsp;&nbsp; <RightArrow className="mt-2 rotate-90" />
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default Projects;
