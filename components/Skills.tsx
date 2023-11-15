import {skills} from "@/utils/profile";
import Image from "next/image";
import ContentHeader from "./ContentHeader";

const Skills = () => {
  return (
    <>
      <ContentHeader title="Skills" id="skills" className="mt-32" />
      <div className="flex justify-center">
        <div className="w-full md:w-[600px] lg:w-[800px] xl:w-[900px] text-center">
          <p className="leading-relaxed text-black dark:text-gray-400 font-medium">
            {skills.description}
          </p>
        </div>
      </div>
      <div className="flex justify-center my-10">
        <div className="w-16 h-1 rounded-full bg-primary inline-flex"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 mt-10 gap-10 md:gap-0">
        {skills.offeredSkills.map((each, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center text-center shadow-md border dark:border-gray-800 rounded-3xl bg-white dark:bg-gray-800 cursor-pointer p-5 py-7 md:m-5"
          >
            <Image src={each.image} alt={each.name} width={80} height={80} />
            <h1 className="font-bold text-primary text-xl xl:text-2xl underline mt-10 px-5 flex flex-col lg:flex-row items-start lg:items-center justify-between">
              {each.name}
            </h1>
            <br />
            <p className="px-5 font-normal text-gray-700 dark:text-gray-400">
              {each.description}
            </p>
            <p className="text-lg dark:text-white font-semibold mt-5 mb-1">
              {each.text}
            </p>
            <ul className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 mb-5">
              {each.skills.map((skill, index) => (
                <span
                  style={{transform: "none", transitionDuration: "2s"}}
                  className="text-sm rounded-3xl dark:text-white bg-gray-200 dark:bg-slate-900 uppercase mr-1 mt-4 py-2 px-4"
                  key={index}
                >
                  {skill}
                </span>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
};

export default Skills;
