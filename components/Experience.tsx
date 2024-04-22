import {experience} from "@/utils/profile";
import ContentHeader from "./ContentHeader";
import ProjectsCard from "./ProjectsCard";

const Experience = () => {
  return (
    <>
      <div className="mt-48">
        <ContentHeader title={experience.name} id="experience" />
        <div className="flex justify-center">
          <div className="w-full md:w-[600px] lg:w-[800px] xl:w-[900px] text-center">
            <p className="leading-relaxed text-black dark:text-gray-400 font-medium">
              {experience.description}
            </p>
          </div>
        </div>
        <div className="flex justify-center my-10">
          <div className="w-16 h-1 rounded-full bg-primary inline-flex"></div>
        </div>
        <div className="container px-5 sm:px-24 py-24 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24">
            {experience.content.map((each, index) => (
              <ProjectsCard {...each} key={index} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
