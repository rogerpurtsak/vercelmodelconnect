import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Profile() {
  const navigate = useNavigate();

  // Redirect if not signed up
  useEffect(() => {
    const signedUp = localStorage.getItem('signedUp');
    if (!signedUp) {
      navigate('/signup');
    }
  }, [navigate]);

  const [bio, setBio] = useState(localStorage.getItem('userBio') || '');
  const [skills, setSkills] = useState(JSON.parse(localStorage.getItem('userSkills') || '[]'));
  const [newSkill, setNewSkill] = useState('');
  const [media, setMedia] = useState([]);

  // Save bio to localStorage
  useEffect(() => {
    localStorage.setItem('userBio', bio);
  }, [bio]);

  // Save skills to localStorage
  useEffect(() => {
    localStorage.setItem('userSkills', JSON.stringify(skills));
  }, [skills]);

  const handleAddSkill = () => {
    if (newSkill.trim()) {
      setSkills([...skills, newSkill.trim()]);
      setNewSkill('');
    }
  };

  const handleMediaUpload = (e) => {
    const files = Array.from(e.target.files);
    setMedia([...media, ...files]);
  };

  return (
    <div className="p-10 space-y-10 bg-gray-50 min-h-screen">
      {/* Top profile image */}
      <div className="flex justify-center">
        <img
          src="mingipoiss 1.png"
          className="rounded-md w-full max-w-4xl"
          alt="User Profile"
        />
      </div>

      {/* Bio section */}
      <div>
        <h2 className="text-2xl font-bold mb-2">User Profile</h2>
        <textarea
          className="w-full p-3 border rounded-md"
          rows="4"
          placeholder="Enter your bio..."
          value={bio}
          onChange={(e) => setBio(e.target.value)}
        ></textarea>
      </div>

      {/* Talents & Skills */}
      <div>
        <h2 className="text-xl font-bold mb-4">Talents & Skills</h2>
        <div className="flex flex-wrap gap-4 mb-4">
          {skills.map((skill, idx) => (
            <div key={idx} className="bg-white p-4 border rounded shadow-md w-40">
              <p className="font-semibold">{skill}</p>
              <p className="text-gray-500 text-sm">Brief description</p>
            </div>
          ))}
        </div>
        <input
          type="text"
          className="border p-2 rounded mr-2"
          placeholder="Add a skill..."
          value={newSkill}
          onChange={(e) => setNewSkill(e.target.value)}
        />
        <button className="bg-mediumteal text-white px-4 py-2 rounded" onClick={handleAddSkill}>
          Add
        </button>
      </div>

      {/* Media Upload */}
      <div className="text-center">
        <h2 className="text-xl font-bold mb-2">Portfolio Media Upload</h2>
        <p className="mb-4 text-gray-600">
          Upload your portfolio media to enhance your chances of getting hired<br />
          <span className="text-sm">.jpg .png .gif .mp4 .mov</span>
        </p>
        <input type="file" multiple onChange={handleMediaUpload} />
        <button className="block mx-auto mt-4 bg-mediumteal text-white py-2 px-6 rounded">
          Upload content
        </button>

        {/* Preview uploaded file names */}
        <ul className="mt-4">
          {media.map((file, idx) => (
            <li key={idx} className="text-sm text-gray-600">{file.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Profile;
