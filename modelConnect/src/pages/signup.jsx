import React, { useState } from 'react';

function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    talent: '',
    portfolio1: '',
    portfolio2: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation (you can expand this)
    if (!formData.name || !formData.email || !formData.password) {
      alert('Please fill in all required fields.');
      return;
    }

    // Save to localStorage (simulate account creation)
    localStorage.setItem('signedUp', 'true');
    localStorage.setItem('userName', formData.name);
    localStorage.setItem('userTalent', formData.talent);

    alert('Signed up successfully! Redirecting to profile...');
    window.location.href = '/profile';
  };

  return (
    <>
      <div className="flex bg-gray-50 min-h-screen">
        {/* Image */}
        <div className="w-1/2 flex items-center justify-center p-10">
          <img src="/naine.jpg" alt="Woman" className="rounded-lg border-4 border-lightteal object-cover max-h-[550px]" />
        </div>

        {/* Form */}
        <div className="w-1/2 flex justify-center items-center">
          <form onSubmit={handleSubmit} className="w-full max-w-md p-8 bg-white flex flex-col space-y-6 rounded shadow-md">
            <h2 className="text-2xl font-bold text-center">Create your account</h2>

            <div>
              <label className="text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                placeholder="David Smith"
                value={formData.name}
                onChange={handleChange}
                className="border rounded-md p-2 w-full"
                required
              />
            </div>

            <div>
              <label className="text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                placeholder="ago@taltech.ee"
                value={formData.email}
                onChange={handleChange}
                className="border rounded-md p-2 w-full"
                required
              />
            </div>

            <div>
              <label className="text-gray-700">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="border rounded-md p-2 w-full"
                required
              />
            </div>

            <div>
              <label className="text-gray-700">Main Talent</label>
              <select
                name="talent"
                value={formData.talent}
                onChange={handleChange}
                className="border rounded-md p-2 w-full"
              >
                <option value="">- Choose your talents -</option>
                <option>Runway Modeling</option>
                <option>Photography</option>
                <option>Acting</option>
                <option>Makeup Artist</option>
                <option>Styling</option>
                <option>Dancing</option>
              </select>
            </div>

            <div>
              <label className="text-gray-700">Portfolio links (optional)</label>
              <input
                type="url"
                name="portfolio1"
                placeholder="https://portfolio.com"
                value={formData.portfolio1}
                onChange={handleChange}
                className="border rounded-md p-2 w-full mb-2"
              />
              <input
                type="url"
                name="portfolio2"
                placeholder="Another link"
                value={formData.portfolio2}
                onChange={handleChange}
                className="border rounded-md p-2 w-full"
              />
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

      {/* Become a Talent Section */}
      <div className="max-w-5xl mx-auto p-10">
        <h1 className="text-3xl font-bold mb-4">Become a talent</h1>
        <p className="text-gray-700 leading-relaxed">
          We are always looking for charismatic, unique, and enthusiastic individuals to join our talent pool for photo and video projects – no matter your age or level of experience. Whether you are totally new to this world, a beginner or a professional actor, singer, or dancer, we would be delighted to hear from you.
          <br /><br />
          Professional photos are not required. A few simple snapshots or selfies will work perfectly to get started. Once you’ve submitted your photos, they will remain in our system. If a suitable project arises, we’ll reach out to you – but please note, there are no guarantees.
        </p>
      </div>
    </>
  );
}

export default Signup;
