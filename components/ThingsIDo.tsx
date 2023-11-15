"use client";
import RightArrow from "@/icons/RightArrow";
import {thingsIdo} from "@/utils/profile";
import {motion} from "framer-motion";
import ContentHeader from "./ContentHeader";

const ThingsIDo = () => {
  return (
    <div>
      <ContentHeader title="Things I Do" id="resume" className="mb-36" />
      <div className="relative isolate">
        <div className="grid grid-cols-1 md:grid-cols-2 container px-5 py-24 mx-auto gap-x-12 -mt-36">
          <div className="leading-relaxed text-black dark:text-gray-400 font-medium">
            {thingsIdo.description}
          </div>
          <div className="flex justify-center md:justify-end mt-12 md:mt-0">
            <motion.div
              initial={{scale: 0}}
              whileInView={{rotate: 360, scale: 1}}
              exit={{scale: 0}}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 50,
              }}
              className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-900 dark:border-gray-700"
            >
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Resume
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {thingsIdo.resumeShortDescription}
              </p>
              <button
                type="button"
                onClick={() => window.open(thingsIdo.resumeLink)}
                className="inline-flex items-center px-3 py-2 text-sm text-center text-black font-semibold bg-primary rounded-lg hover:bg-primary focus:ring-4 focus:outline-none focus:ring-primary"
              >
                Download &nbsp;&nbsp;
                <RightArrow />
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThingsIDo;
