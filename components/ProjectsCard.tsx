import {motion} from "framer-motion";
import Image from "next/image";

const varience = {
  hidden: {scale: 0.8, opacity: 0},
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
    },
  },
};

const ProjectsCard = ({
  image,
  title,
  url,
  techStack,
  description,
}: {
  image: string;
  title: string;
  url: string;
  techStack: string[];
  description: string;
}) => {
  return (
    <>
      <motion.div
        variants={varience}
        initial="hidden"
        whileInView="visible"
        className="bg-white dark:bg-gray-800 flex flex-col  max-w-2xl shadow-md rounded-lg mt-10 sm:mt-8 transition-all"
      >
        <a
          rel="noreferrer"
          target={"_blank"}
          href={url}
          className="relative w-full shrink-0 rounded-xl overflow-hidden shadow-xl before:absolute before:inset-0 dark:before:bg-black/20 before:z-10 scale-[1.05] lg:scale-[1.1] group"
        >
          <div className="overflow-hidden cursor-pointer rounded-xl relative ">
            <div className="rounded-xl z-50 opacity-0 group-hover:opacity-100 group-hover:backdrop-blur-[2.5px] transition duration-300 ease-in-out cursor-pointer absolute from-black/80 to-transparent inset-x-0 pt-30 text-white w-full h-full">
              <div className="p-4 text-xl group-hover:opacity-100 bg-slate-200/10 group-hover:translate-y-0 translate-y-4 transform transition duration-300 ease-in-out w-full h-full">
                <div className="text-sm flex justify-center items-center h-full">
                  <button className="py-2.5 px-5 mb-2 text-2xl font-medium flex items-center justify-center text-black focus:outline-none rounded-lg">
                    <Image
                      src="/link.png"
                      alt={"Image"}
                      width={40}
                      height={40}
                      className="mr-2"
                      placeholder="blur"
                      blurDataURL="/link.png"
                    />
                    Live Preview
                  </button>
                </div>
              </div>
            </div>
            <Image
              src={image}
              alt={"Image"}
              width={1500}
              className="object-cover transition duration-300 group-hover:scale-[1.2]"
              height={630}
              placeholder="blur"
              blurDataURL={image}
            />
          </div>
        </a>
        <h1 className="font-bold text-neutral-900 dark:text-neutral-200 text-xl mt-10 px-5 flex flex-col lg:flex-row items-start lg:items-center justify-between">
          {title}
        </h1>
        <br />
        <p className="px-5 font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
        <div className="flex flex-col justify-between gap-3 p-5 ">
          <div className="flex flex-wrap items-center gap-1">
            {techStack!.map((tool, index) => {
              return (
                <span
                  key={`${tool}-${index}`}
                  className="px-4 py-2 text-xs dark:text-white bg-gray-200 dark:bg-slate-900 rounded"
                >
                  {tool.toUpperCase()}
                </span>
              );
            })}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default ProjectsCard;
