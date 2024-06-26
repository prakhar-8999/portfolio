"use client";
import RightArrow from "@/icons/RightArrow";
import {profile} from "@/utils/profile";
import {TypeAnimation} from "react-type-animation";
import AnimatedObject from "./AnimatedObject";
import Header from "./Header";

const HeroSection = () => {
  return (
    <>
      <div className="flex justify-center items-center h-screen text-primary">
        <Header />
        <div className="relative isolate pt-14 flex justify-center items-center">
          <div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-[500px]"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-gradientstart to-gradientFinish opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 mt-36 md:mt-0">
            <div>
              <h1 className="title-font sm:text-5xl text-4xl mb-4 font-medium text-gray-900">
                <span className="text-black dark:text-white font-semibold">
                  Hi! I&apos;am &nbsp;
                </span>
                <span className="text-primary font-semibold">
                  {profile.name}
                </span>{" "}
                <span className="text-black dark:text-white font-semibold">
                  and
                </span>
              </h1>
              <p className="mb-8 leading-relaxed text-black dark:text-gray-400 font-medium">
                <TypeAnimation
                  splitter={(str) => str.split(/(?= )/)}
                  sequence={[profile.description]}
                  speed={{type: "keyStrokeDelayInMs", value: 110}}
                  omitDeletionAnimation={true}
                  style={{
                    fontSize: "1em",
                    display: "block",
                    minHeight: "200px",
                  }}
                />
              </p>
              <a
                href="#hireme"
                className="flex underline underline-offset-[12px] text-2xl text-primary font-semibold"
              >
                Connect with me <RightArrow className="ml-4 mt-[10px]" />
              </a>
            </div>
            <div>
              <AnimatedObject />
            </div>
          </div>
          <div
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-gradientstart to-gradientFinish opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
