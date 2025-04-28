import React from 'react'

function Signup() {
  return (
    <>
    <div className='flex'>
        <div className='w-1/2'>
        <img src="/naine.jpg" alt="Picture of a woman" className="w-full self-start p-10" />
        </div>

        <div className="w-1/2 flex justify-center items-center">
            <form className="w-full max-w-md p-8 bg-white flex flex-col space-y-10">
            <h2 className="text-2xl font-bold text-center">Create your account</h2>

            <div className="flex flex-col space-y-2">
                <label className="text-gray-700">Name</label>
                <input type="text" placeholder="David Smith" className="border rounded-md p-2" />
            </div>

            <div className="flex flex-col space-y-2">
                <label className="text-gray-700">Email</label>
                <input type="email" placeholder="ago@taltech.ee" className="border rounded-md p-2" />
            </div>

            <div className="flex flex-col space-y-2">
                <label className="text-gray-700">Password</label>
                <input type="password" placeholder="Password" className="border rounded-md p-2" />
            </div>

            <div className="flex flex-col space-y-2">
                <div className="flex flex-col space-y-2">
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

            </div>

            <div className="flex flex-col space-y-2">
                <label className="text-gray-700">Portfolio links (optional)</label>
                <input type="url" placeholder="https://portfolio.com" className="border rounded-md p-2" />
                <input type="url" placeholder="portfolio link" className="border rounded-md p-2" />
            </div>

            <button type="submit" className="bg-mediumteal hover:bg-teal-500 text-white font-semibold py-2 rounded-md">
                Sign Up
            </button>
            </form>
        </div>
    </div>
    <div className='h-1/2 flex-col'>
        <h1 className='font-bold font-roboto text-3xl p-10'>Become a talent</h1>
        <h2 className='font-mulish p-10 pb-20'>We are always looking for charismatic, unique, and enthusiastic individuals to join our talentpool for photo and video projects – no matter your age or level of experience. Whether you are totally new to this world, a beginner or a professional actor, singer, or dancer, we would be delighted to hear from you.
            Professional photos are not required. A few simple snapshots or selfies will work perfectly to get started.
            Once you’ve submitted your photos, they will remain in our system. If a suitable project arises, we’ll reach out to you – but please note, there are no guarantees.</h2>
    </div>
    </>
  )
}

export default Signup