import React from 'react';

function Contact() {
  return (
    <div className="bg-gray-50">
      {/* Top Section */}
      <section className="container mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold text-black mb-4">Contact Us</h1>
        <p className="text-gray-700 mb-10">Fill in the form to get in touch</p>

        <div className="flex flex-col md:flex-row gap-10">
          {/* Image */}
          <div className="md:w-1/2">
            <img
              src="/Image 37 1.png"
              alt="Contact Support"
              className="rounded-lg shadow-lg object-cover w-full"
            />
          </div>

          {/* Form */}
          <div className="md:w-1/2 bg-white p-6 rounded-lg shadow-md space-y-4">
            <div className="flex gap-4">
              <input type="text" placeholder="First name" className="w-1/2 border p-2 rounded" />
              <input type="text" placeholder="Last name" className="w-1/2 border p-2 rounded" />
            </div>
            <input type="email" placeholder="Email" className="w-full border p-2 rounded" />
            <input type="text" placeholder="Company name" className="w-full border p-2 rounded" />

            <select className="w-full border p-2 rounded">
              <option>Please select a topic</option>
              <option>Collaboration</option>
              <option>Feedback</option>
              <option>Other</option>
            </select>

            <textarea
              placeholder="Please share what you want us to help with"
              className="w-full border p-2 rounded h-24"
            ></textarea>

            <button className="bg-green-300 text-black font-semibold py-2 px-4 rounded hover:bg-green-400">
              Submit
            </button>
          </div>
        </div>
      </section>

      {/* Bottom Section */}
      <section className="bg-white py-16 border-t">
        <div className="max-w-xl mx-auto border-2 border-blue-400 p-10 rounded-lg">
          <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full border p-2 rounded mb-4"
          />
          <input
            type="email"
            placeholder="your@email.com"
            className="w-full border p-2 rounded mb-4"
          />
          <textarea
            placeholder="Enter question or feedback"
            className="w-full border p-2 rounded mb-6 h-24"
          ></textarea>
          <button className="bg-mediumteal text-white py-2 px-4 rounded hover:bg-teal-600">
            Submit
          </button>
        </div>
      </section>
    </div>
  );
}

export default Contact;
