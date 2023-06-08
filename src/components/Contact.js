const Contact = () => {
  return (
    <>
      <div class="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
        <div class="relative py-3 sm:max-w-xl sm:mx-auto">
          <div class="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
            <div class="max-w-md mx-auto">
              <div class="flex items-center space-x-5">
                <div class="h-14 w-14 bg-indigo-500 rounded-full flex flex-shrink-0 justify-center items-center text-white text-2xl font-mono">
                  C
                </div>
                <div class="block pl-2 font-semibold text-xl self-start text-gray-700">
                  <h2 class="leading-relaxed">Contact Us</h2>
                  <p class="text-sm text-gray-500 font-normal leading-relaxed">
                    Get in touch with us!
                  </p>
                </div>
              </div>
              <div class="divide-y divide-gray-200">
                <div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                  <div class="flex flex-col">
                    <label class="leading-loose">Name</label>
                    <input
                      type="text"
                      class="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div class="flex flex-col">
                    <label class="leading-loose">Email</label>
                    <input
                      type="email"
                      class="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div class="flex flex-col">
                    <label class="leading-loose">Message</label>
                    <textarea
                      class="px-4 py-2 h-32 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      placeholder="Enter your message"
                    ></textarea>
                  </div>
                </div>
                <div class="pt-4 flex items-center space-x-4">
                  <button
                    class="bg-indigo-500 flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
