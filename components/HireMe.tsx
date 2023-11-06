import {hireMe} from "@/utils/profile";
import ContactForm from "./ContactForm";
import ContentHeader from "./ContentHeader";

const HireMe = () => {
  return (
    <>
      <ContentHeader title="Hire Me" id="hireme" />
      <div className="flex justify-center">
        <div className="w-full md:w-[600px] lg:w-[800px] xl:w-[900px] text-center">
          <p className="leading-relaxed text-black dark:text-gray-400 font-medium">
            {hireMe.description}
          </p>
        </div>
      </div>
      <div className="flex justify-center my-10">
        <div className="w-16 h-1 rounded-full bg-primary inline-flex"></div>
      </div>
      <ContactForm />
    </>
  );
};

export default HireMe;
