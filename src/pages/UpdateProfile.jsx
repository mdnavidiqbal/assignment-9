import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthProvider";
import { useNavigate } from "react-router";

export default function UpdateProfile() {
  const { user, updateUserProfile } = useContext(AuthContext);
  const [name, setName] = useState(user?.displayName || "");
  const [photo, setPhoto] = useState(user?.photoURL || "");
  const navigate = useNavigate();

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await updateUserProfile({ displayName: name, photoURL: photo });
      alert("Profile updated successfully!");
      navigate("/myprofile");
    } catch (error) {
      console.error(error);
      alert("Failed to update profile.");
    }
  };

  return (
    <div className="max-w-md mx-auto bg-base-400 p-6 rounded-xl shadow-xl my-20">
      <h2 className="text-2xl font-bold mb-4 text-center">Update Information</h2>
      <form onSubmit={handleUpdate} className="space-y-4">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter new name"
          className="input input-bordered w-full"
        />
        <input
          type="text"
          value={photo}
          onChange={(e) => setPhoto(e.target.value)}
          placeholder="Enter new photo URL"
          className="input input-bordered w-full"
        />
        <button className="btn btn-primary w-full">Update Information</button>
      </form>
    </div>
  );
}
