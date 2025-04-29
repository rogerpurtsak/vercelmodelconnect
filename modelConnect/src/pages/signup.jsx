import React from 'react';

function Signup() {
  return (
    <div className="bg-gray-50">
      {/* Top Section: Image + Form */}
      <div className="flex flex-col md:flex-row min-h-screen">
        {/* Left side - Image */}
        <div className="md:w-1/2 flex justify-center items-center p-6">
          <img
            src="/naine.jpg"
            alt="Model"
            className="rounded-lg border-4 border-lightteal object-cover max-h-[550px]"
          />
        </div>

        {/* Right side - Form */}
        <div className="md:w-1/2 flex items-center justify-center p-6">
          <form className="w-full max-w-md bg-white rounded-lg shadow-md p-8 space-y-6">
            <h2 className="text-2xl font-bold text-center">Create your account</h2>

            <div className="flex flex-col space-y-1">
              <label className="text-gray-700">Name</label>
              <input type="text" placeholder="David Smith" className="border rounded-md p-2" />
            </div>

            <div className="flex flex-col space-y-1">
              <label className="text-gray-700">Email</label>
              <input type="email" placeholder="ago@taltech.ee" className="border rounded-md p-2" />
            </div>

            <div className="flex flex-col space-y-1">
              <label className="text-gray-700">Password</label>
              <input type="password" placeholder="Password" className="border rounded-md p-2" />
            </div>

            <div className="flex flex-col space-y-1">
              <label className="text-gray-700">Main Talent</label>
              <select className="border rounded-md p-2">
                <option>- Choose your talents -</option>
                <option>Runway Modeling</option>
                <option>Photography</option>
                <option>Acting</option>
                <option>Makeup Artist</option>
                <option>Styling</option>
                <option>Dancing</option>
              </select>
            </div>

            <div className="flex flex-col space-y-1">
              <label className="text-gray-700">Portfolio links (optional)</label>
              <input type="url" placeholder="https://portfolio.com" className="border rounded-md p-2" />
              <input type="url" placeholder="Another link" className="border rounded-md p-2" />
            </div>

            <button
              type="submit"
              className="bg-mediumteal hover:bg-teal-500 text-white font-semibold py-2 rounded-md"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Section: Become a Talent */}
      <div className="max-w-4xl mx-auto p-10">
        <h1 className="text-3xl font-bold mb-4">Become a talent</h1>
        <p className="text-gray-700 leading-relaxed">
          We are always looking for charismatic, unique, and enthusiastic individuals to join our talent pool for photo
          and video projects – no matter your age or level of experience. Whether you are totally new to this world, a
          beginner or a professional actor, singer, or dancer, we would be delighted to hear from you.
          <br />
          <br />
          Professional photos are not required. A few simple snapshots or selfies will work perfectly to get started.
          Once you’ve submitted your photos, they will remain in our system. If a suitable project arises, we’ll reach
          out to you – but please note, there are no guarantees.
        </p>
      </div>
    </div>
  );
}

export default Signup;
