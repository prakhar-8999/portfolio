"use client";
import {services} from "@/utils/profile";
import {motion} from "framer-motion";
import Image from "next/image";
import {useState} from "react";
import ContentHeader from "./ContentHeader";

const Services = () => {
  const [start, setStart] = useState(services.onlyShow);

  return (
    <div className="mt-48 sm:mt-0">
      <ContentHeader title="Services" id="services" />
      <div className="flex justify-center">
        <div className="w-full md:w-[600px] lg:w-[800px] xl:w-[900px] text-center">
          <p className="leading-relaxed text-black dark:text-gray-400 font-medium">
            {services.description}
          </p>
        </div>
      </div>
      <div className="flex justify-center my-10">
        <div className="w-16 h-1 rounded-full bg-primary inline-flex"></div>
      </div>

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            {services.offeredServices.slice(0, start).map((each, index) => (
              <motion.div
                className="p-4 md:w-1/3 flex flex-col text-center items-center animate-[wiggle_1s_ease-in-out_infinite]"
                key={index}
                whileHover={{scale: 1.1}}
                initial={{scale: 0}}
                whileInView={{scale: 1}}
                exit={{scale: 0}}
                transition={{delay: 0.1, times: 3}}
                // whileTap={{scale: 0.8}}
              >
                <div className="w-20 h-20 inline-flex items-center justify-center rounded-full mb-5 flex-shrink-0">
                  <Image
                    src={each.image}
                    alt={each.title}
                    width={20}
                    height={20}
                    className="w-20 h-20 rounded-full"
                  />
                </div>
                <div className="flex-grow">
                  <h2 className="text-black dark:text-white text-xl title-font font-semibold mb-3">
                    {each.title}
                  </h2>
                  <p className="leading-relaxed text-black dark:text-gray-400 font-medium">
                    {each.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          <button
            className="flex mx-auto mt-16 text-white bg-substitute border-0 py-2 px-8 focus:outline-none hover:bg-primary rounded text-lg"
            onClick={() =>
              setStart(
                start === services.offeredServices.length
                  ? services.onlyShow
                  : services.offeredServices.length
              )
            }
          >
            {start === services.offeredServices.length
              ? "Show Less"
              : "Show More"}
            {start === services.offeredServices.length ? (
              <svg
                className="w-6 h-6 ml-2 -rotate-90"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            ) : (
              <svg
                className="w-6 h-6 ml-2 rotate-90"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            )}
          </button>
        </div>
      </section>
    </div>
  );
};

export default Services;
