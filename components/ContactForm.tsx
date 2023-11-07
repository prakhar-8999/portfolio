const ContactForm = () => {
  const submit = (event: any) => {
    event.preventDefault();
    const forms = document.forms as any;
    const form = forms.contact;
    console.log(form);
  };

  return (
    <div className="isolate px-6 lg:px-8 mb-32">
      <form name="contact" className="mx-auto max-w-xl" onSubmit={submit}>
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
                name="fname"
                id="fname"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm bg-gray-400 sm:text-sm sm:leading-6"
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
                type="text"
                name="lname"
                id="lname"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm bg-gray-400 sm:text-sm sm:leading-6"
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
                name="email"
                id="email"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm bg-gray-400 sm:text-sm sm:leading-6"
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
                type="tel"
                name="phone"
                id="phone"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm bg-gray-400 sm:text-sm sm:leading-6"
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
                id="message"
                rows={4}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm bg-gray-400 sm:text-sm sm:leading-6"
              ></textarea>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-primary px-3.5 py-2.5 text-center text-sm font-semibold text-black shadow-sm"
          >
            Let&apos;s talk
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
