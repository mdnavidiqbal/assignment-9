import React, { useContext } from "react";
import { Link } from "react-router";
import { AuthContext } from "../context/AuthProvider";

export default function MyProfile() {
  const { user, logout } = useContext(AuthContext);

  if (!user) return <div>Loading...</div>;

  return (
    <div className="max-w-lg mx-auto bg-base-200 p-6 rounded-xl shadow-lg text-center my-30">
      <h2 className="text-3xl font-bold mb-4">My Profile</h2>
      <img
        src={user.photoURL || "https://i.ibb.co/3C5xJ7R/user.png"}
        alt="profile"
        className="w-32 h-32 rounded-full mx-auto mb-4"
      />
      <h3 className="text-xl font-semibold">{user.displayName || "Anonymous User"}</h3>
      <p className="text-sm text-gray-600">{user.email}</p>

      <div className="mt-6 flex justify-center gap-4">
        <Link to="/update-profile" className="btn btn-primary">Update Info</Link>
        <button onClick={logout} className="btn btn-outline">Logout</button>
      </div>
    </div>
  );
}
