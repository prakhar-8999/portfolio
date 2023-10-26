"use client";
import CloseIcon from "@/icons/CloseIcon";
import MenuIcon from "@/icons/MenuIcon";
import RightArrow from "@/icons/RightArrow";
import {navigation, profile} from "@/utils/profile";
import {Dialog} from "@headlessui/react";
import {useState} from "react";
import {TypeAnimation} from "react-type-animation";
import AnimatedObject from "./AnimatedObject";

const HeroSection = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-white dark:bg-black">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          className="flex items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <span className="text-4xl text-primary">&lt;</span>
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <MenuIcon />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-semibold leading-6 text-gray-900 dark:text-white"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <span className="text-4xl text-primary">/&#62;</span>
          </div>
        </nav>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white dark:bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <span>&lt;</span>
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <CloseIcon />
              </button>
            </div>
            <div className="mt-6">
              {navigation.map((item) => (
                <div key={item.name} className="mb-5">
                  <a
                    href={item.href}
                    className="-mx-3 text-primary dark:text-white text-xl font-semibold"
                  >
                    {item.name}
                  </a>
                </div>
              ))}
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

      <div className="relative isolate px-6 pt-14 lg:px-8 flex justify-center items-center">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
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
        <section className="text-gray-600 body-font mt-10 md:mt-32">
          <div className="container mx-auto flex px-2 sm:px-5 pb-24 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-48 md:pr-24 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
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
              <div className="flex justify-center mt-10 hover:scale-110 transition">
                <a
                  href="#contact"
                  className="flex underline underline-offset-[12px] text-2xl text-primary font-semibold"
                >
                  Connect with me <RightArrow />
                </a>
              </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mt-36 md:mt-0">
              <AnimatedObject />
            </div>
          </div>
        </section>
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
  );
};

export default HeroSection;
