import React from 'react';
import { FiClock, FiGithub, FiMail } from 'react-icons/fi';
import '../Componentscss/Fonix.css';

const Profile = () => {
  return (
    <div className="container text-white px-4 md:px-10 py-6 mt-3">
      {/* Profile Header */}
      <div className="flex flex-col md:flex-row justify-start gap-6">
        <div className="left flex flex-col items-center md:items-start">
          <img className="w-24 h-24 rounded-full mb-3" src="/mohitlogo.png" alt="Profile" />
          <h5 className="font-semibold text-lg">Mohit Kumawat</h5>
        </div>

        <div className="right space-y-2 md:space-y-3">
          <p className="bg-sky-500 text-white w-max px-3 py-1 text-sm rounded">Frontend Intern</p>

          <div className="flex items-center gap-2">
            <FiMail />
            <p className="text-sm sm:text-base">mohit.kumawat@fonixtech.io</p>
          </div>

          <div className="rightgit flex gap-4 items-center mt-2">
            <div className="gitcircle border-2 border-gray-400 rounded-full p-2">
              <FiGithub />
            </div>
            <div className="btncls rounded flex border-2 gap-2 px-4 py-2 border-gray-400 items-center">
              <FiClock />
              <button className="ptrem">Reminders</button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <hr className="my-4 border-gray-600" />
      <div className="ulitems flex flex-wrap justify-start gap-4 p-2">
        <ul className="inline-flex flex-wrap gap-4">
          {[
            'Timeline',
            'General Info',
            'Social Links',
            'Job Info',
            'Account Settings',
            'My Preferences',
            'Left Menu',
            'Files',
            'Timesheets',
            'Time cards',
            'Leave',
          ].map((item, index) => (
            <li
              key={index}
              className="cursor-pointer text-gray-300 hover:text-blue-500 hover:underline transition duration-200"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
      <hr className="my-4 border-gray-600" />

      {/* Social Links Section */}
      <h2 className="text-xl font-semibold mb-2">Social Links</h2>
      <div className="bg-gray-800 p-4 rounded-lg">
        {[
          { name: 'Facebook', placeholder: 'https://www.facebook.com/' },
          { name: 'Twitter', placeholder: 'https://twitter.com/' },
          { name: 'Linkedin', placeholder: 'https://www.linkedin.com/' },
          { name: 'WhatsApp', placeholder: 'https://wa.me/+001XXXXXXXXX' },
          { name: 'Digg', placeholder: 'http://digg.com/' },
          { name: 'Youtube', placeholder: 'https://www.youtube.com/' },
          { name: 'Pinterest', placeholder: 'https://www.pinterest.com/' },
        ].map((item, index) => (
          <div key={index} className="flex justify-between items-center py-2 border-b border-gray-700">
            <label className="font-medium text-sm sm:text-base">{item.name}</label>
            <input
              type="text"
              placeholder={item.placeholder}
              className="bg-gray-900 text-white border border-gray-600 rounded px-3 py-2 w-full sm:w-2/3 outline-none"
            />
          </div>
        ))}
      </div>

      {/* Account Information Section */}
      <h2 className="text-xl font-semibold my-4">Account Information</h2>
      <div className="bg-gray-800 p-4 rounded-lg">
        {[
          { label: 'Phone', value: '88905 95701' },
          { label: 'Alternative Phone', value: '9660406868' },
          { label: 'Skype', value: 'Skype' },
          { label: 'Date of Birth', value: '21-04-2005' },
          { label: 'SSN', value: 'SSN' },
        ].map((item, index) => (
          <div key={index} className="flex justify-between items-center py-2 border-b border-gray-700">
            <span className="font-medium text-sm sm:text-base">{item.label}</span>
            <span className="text-gray-400 text-sm sm:text-base">{item.value}</span>
          </div>
        ))}

        {/* Gender Selection */}
        <div className="flex items-center justify-between py-3 border-b border-gray-700">
          <span className="font-medium text-sm sm:text-base">Gender</span>
          <div className="flex gap-4">
            {['Male', 'Female', 'Other'].map((gender, index) => (
              <label key={index} className="flex items-center gap-2">
                <input
                  type="radio"
                  name="gender"
                  value={gender.toLowerCase()}
                  defaultChecked={gender === 'Male'}
                  className="accent-blue-500"
                />
                {gender}
              </label>
            ))}
          </div>
        </div>

        {/* Save Button */}
        <div className="mt-4 flex justify-end">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded text-sm sm:text-base">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
