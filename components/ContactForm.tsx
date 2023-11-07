import Loading from "@/icons/Loading";
import {hireMe} from "@/utils/profile";
import emailjs from "@emailjs/browser";
import {useState} from "react";
import toast from "react-hot-toast";

const ContactForm = () => {
  const [isLoading, setLoading] = useState(false);

  const submit = (event: any) => {
    event.preventDefault();
    setLoading(true);
    const forms = document.forms as any;
    const form = forms.contact;
    console.log(form);
    const templateParams = {
      to_name: "Prakhar",
      from_name: form.fname.value + " " + form.lname.value,
      from_email: form.email.value,
      from_phone: form.phone.value,
      message: form.message.value,
    };

    emailjs
      .send(
        hireMe.emailServiceId,
        hireMe.templateId,
        templateParams,
        hireMe.publicKey
      )
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
          setLoading(false);
          toast.success("Your message has been recorded...", {duration: 3000});
          form.reset();
        },
        function (error) {
          console.log("FAILED...", error);
          setLoading(false);
          toast.error("Message not sent!");
        }
      );
  };

  return (
    <div className="isolate px-6 lg:px-8 mb-32">
      <form
        name="contact"
        className="mx-auto max-w-xl"
        id="contact_form"
        onSubmit={submit}
      >
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="fname"
              className="block text-sm font-semibold leading-6 text-black dark:text-white"
            >
              First name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                required
                name="fname"
                id="fname"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 dark:text-white shadow-sm bg-gray-200 dark:bg-gray-700 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="lname"
              className="block text-sm font-semibold leading-6 text-black dark:text-white"
            >
              Last name
            </label>
            <div className="mt-2.5">
              <input
                required
                type="text"
                name="lname"
                id="lname"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 dark:text-white shadow-sm bg-gray-200 dark:bg-gray-700 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold leading-6 text-black dark:text-white"
            >
              Email
            </label>
            <div className="mt-2.5">
              <input
                type="email"
                pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
                required
                name="email"
                id="email"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 dark:text-white shadow-sm bg-gray-200 dark:bg-gray-700 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="phone"
              className="block text-sm font-semibold leading-6 text-black dark:text-white"
            >
              Phone number
            </label>
            <div className="mt-2.5">
              <input
                type="number"
                required
                name="phone"
                id="phone"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 dark:text-white shadow-sm bg-gray-200 dark:bg-gray-700 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block text-sm font-semibold leading-6 text-black dark:text-white"
            >
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                name="message"
                required
                id="message"
                rows={4}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 dark:text-white shadow-sm bg-gray-200 dark:bg-gray-700 sm:text-sm sm:leading-6"
              ></textarea>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-primary px-3.5 py-2.5 text-center text-sm font-semibold text-black shadow-sm"
          >
            {isLoading ? <Loading /> : "Let's talk"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
