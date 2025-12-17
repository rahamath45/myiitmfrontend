import { useEffect, useState } from "react";
import api from "../services/api";


const ProfileView = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    api.get("/profile")
      .then(res => {
        console.log("the profile",res.data)
         setProfile(res.data.user)
      }
      )
      .catch(err => console.error(err));
  }, []);

  if (!profile) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <p className="text-gray-600 text-lg">Loading profile...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 to-purple-700 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-6">

        {/* Header */}
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          My Profile
        </h2>

        {/* Profile Fields */}
        <div className="space-y-4">

          <div className="flex justify-between">
            <span className="text-gray-500 font-medium">Role</span>
            <span className="text-gray-800 font-semibold">{profile.career?.role}</span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-500 font-medium">Experience</span>
            <span className="text-gray-800 font-semibold">
              {profile.career?.experience} Years
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-500 font-medium">LinkedIn</span>
            <a
              href={profile.links?.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-indigo-600 hover:underline font-medium cursor:pointer"
            >
              View
            </a>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-500 font-medium">GitHub</span>
            <a
              href={profile.links?.github}
              target="_blank"
              rel="noreferrer"
              className="text-indigo-600 hover:underline font-medium cursor:pointer"
            >
              View
            </a>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-500 font-medium">Portfolio</span>
            <a
              href={profile.links?.portfolio}
              target="_blank"
              rel="noreferrer"
              className="text-indigo-600 hover:underline font-medium cursor:pointer"
            >
              View
            </a>
          </div>

        </div>

        {/* Button */}
        <div className="mt-6">
          <button
            onClick={() => window.history.back()}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-xl font-semibold transition"
          >
            Back
          </button>
        </div>

      </div>
    </div>
  );
};

export default ProfileView;
