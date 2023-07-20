import React, { useState } from "react";
import { useRouter } from "next/router";
import profileData from "@/profileData";

const EditProfile: React.FC = () => {
  const router = useRouter();
  const [username, setUsername] = useState(profileData.username);
  const [email, setEmail] = useState(profileData.email);
  const [birthDate, setBirthDate] = useState(profileData.birthDate);
  const [country, setCountry] = useState(profileData.country);

  const handleSaveClick = () => {
    profileData.username = username;
    profileData.email = email;
    profileData.birthDate = birthDate;
    profileData.country = country;

    router.push("/Profile");
  };

  return (
    <div className="container mx-auto px-4 py-8 bg-slate-200 text-gray-800">
      <h1 className="text-4xl font-bold mb-6">Account Details</h1>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2">My Account</h2>
        <div className="grid grid-cols-2 gap-2 mb-4">
          <p>Username:</p>
          <input
            type="text"
            className="px-2 py-1 font-semibold"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <p>E-mail:</p>
          <input
            type="text"
            className="px-2 py-1 font-semibold"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p>Birth Date:</p>
          <input
            type="text"
            className="px-2 py-1 font-semibold"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
          />
          <p>Country:</p>
          <select
            className="px-2 py-1 font-semibold"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          >
            <option value="Türkiye">Turkey</option>
            <option value="ABD">USA</option>
            <option value="İngiltere">England</option>
          </select>
        </div>
      </div>

      <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        onClick={handleSaveClick}
      >
        Save
      </button>
    </div>
  );
};

export default EditProfile;
