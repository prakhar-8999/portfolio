import {skills} from "@/utils/profile";
import {motion} from "framer-motion";
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

      <div className="grid grid-cols-1 md:grid-cols-3 mt-10 overflow-hidden">
        {skills.offeredSkills.map((each, index) => (
          <motion.div
            key={index}
            className="flex flex-col justify-center items-center text-center shadow-md border dark:border-gray-800 rounded-3xl bg-white dark:bg-gray-800 cursor-pointer p-5 py-7 m-5"
            whileHover={{scale: 1.05}}
            initial={
              index === 0 ? {x: -500} : index === 1 ? {scale: 0} : {x: 500}
            }
            whileInView={index === 1 ? {scale: 1} : {x: 0}}
            exit={{scale: 0}}
            transition={{delay: 0.1, times: 3}}
          >
            <Image src={each.image} alt={each.name} width={80} height={80} />
            <h1 className="font-bold text-primary text-xl xl:text-2xl underline mt-10 px-5 flex flex-col lg:flex-row items-start lg:items-center justify-between">
              {each.name}
            </h1>
            <br />
            <p className="px-5 font-normal text-gray-700 dark:text-gray-400">
              {each.description}
            </p>
            {/* <h5 className="text-xl xl:text-2xl text-gray-900 dark:text-white underline font-semibold tracking-tight text-center mb-2">
              {each.name}
            </h5>
            <p className="text-lg text-gray-500 text-center mb-3">
              {each.description}
            </p> */}
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
          </motion.div>
        ))}
      </div>

      {/* <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-10 h-10"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                  Shooting Stars
                </h2>
                <p className="leading-relaxed text-base">
                  Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                  taxidermy. Gastropub indxgo juice poutine, ramps microdosing
                  banh mi pug VHS try-hard.
                </p>
                <a className="mt-3 text-indigo-500 inline-flex items-center">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-10 h-10"
                  viewBox="0 0 24 24"
                >
                  <circle cx="6" cy="6" r="3"></circle>
                  <circle cx="6" cy="18" r="3"></circle>
                  <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                  The Catalyzer
                </h2>
                <p className="leading-relaxed text-base">
                  Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                  taxidermy. Gastropub indxgo juice poutine, ramps microdosing
                  banh mi pug VHS try-hard.
                </p>
                <a className="mt-3 text-indigo-500 inline-flex items-center">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-10 h-10"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                  Neptune
                </h2>
                <p className="leading-relaxed text-base">
                  Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                  taxidermy. Gastropub indxgo juice poutine, ramps microdosing
                  banh mi pug VHS try-hard.
                </p>
                <a className="mt-3 text-indigo-500 inline-flex items-center">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Button
          </button>
        </div>
      </section> */}
    </>
  );
};

export default Skills;
