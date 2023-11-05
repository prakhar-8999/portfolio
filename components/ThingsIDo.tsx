"use client";
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
            {thingsIdo.discription}
          </div>
          <div className="flex justify-center md:justify-end mt-12 md:mt-0">
            <motion.div
              initial={{scale: 0}}
              animate={{rotate: 360, scale: 1}}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 100,
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
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-primary rounded-lg hover:bg-primary focus:ring-4 focus:outline-none focus:ring-red-300"
              >
                Download
                <svg
                  className="w-3.5 h-3.5 ml-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThingsIDo;