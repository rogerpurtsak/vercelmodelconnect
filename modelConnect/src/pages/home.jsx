import React from 'react';

function Home() {
  return (
    <>
      <div className="relative h-screen bg-home bg-cover bg-center flex flex-col justify-center items-center text-center">
        <div className="absolute inset-0 bg-black opacity-40"></div>

        <div className="relative z-10">
          <h1 className="text-white text-4xl font-roboto font-bold mb-4">
            Empowering Diversity In Fashion
          </h1>
          <h2 className="text-white text-2xl font-mulish font-semibold mb-10">
            Join a community that celebrates inclusion and diversity
          </h2>

          <button className="bg-mediumteal hover:bg-teal-500 text-white font-mulish py-3 px-6 rounded-md">
            Join our community
          </button>
        </div>
      </div>

      {/* our values section type shi */}
      <section className="py-16 bg-white">
        <h2 className="text-4xl font-bold text-center mb-12">Our values</h2>
        <div className="container mx-auto flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-16 text-center">
          <div className="max-w-xs">
            <h3 className="text-xl font-bold mb-2">Diversity</h3>
            <p className="text-gray-600">
              We believe in the beauty of diversity. Our team and models come from all walks of life, bringing unique perspectives to every project.
            </p>
          </div>
          <div className="max-w-xs">
            <h3 className="text-xl font-bold mb-2">Empowerment</h3>
            <p className="text-gray-600">
              We empower our models to embrace their individuality and strive for excellence, providing the support they need to thrive.
            </p>
          </div>
          <div className="max-w-xs">
            <h3 className="text-xl font-bold mb-2">Creativity</h3>
            <p className="text-gray-600">
              We embrace creativity in all its forms, from innovative campaigns to out-of-the-box casting, making every project a masterpiece.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 border-t-2 border-black">
        <div className="container mx-auto px-6">
          <div className="bg-lightteal p-10 rounded-lg text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Join our community</h2>
            <p className="text-black mb-6">
              Connect with industry professionals and elevate your modeling career. Sign up now to become a part of our exclusive community.
            </p>
            <button className="bg-mediumteal text-white font-bold py-2 px-6 rounded-md hover:bg-gray-100">
              Sign Up
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
