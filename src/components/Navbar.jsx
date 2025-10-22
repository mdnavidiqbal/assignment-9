import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import { AuthContext } from "../context/AuthProvider";
export default function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  return (
    <div className="navbar bg-[#825901] shadow-lg">
      <div className="navbar-start">
        <Link to="/" className="btn btn-ghost normal-case text-xl">GameHub</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <NavLink to="/" className="mx-2">Home</NavLink>
        <NavLink to="/popular" className="mx-2">Popular</NavLink>
        <NavLink to="/myprofile" className="mx-2">MyProfile</NavLink>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className="flex items-center gap-3">
            {/* Profile picture clickable link */}
            <Link to="/myprofile" title="My Profile">
              <img
                src={user.photoURL || "https://i.ibb.co/3C5xJ7R/user.png"}
                alt="profile"
                className="w-10 h-10 rounded-full border-2 border-primary hover:scale-105 transition-all duration-200"
              />
            </Link>

            {/* Logout Button */}
            <button onClick={handleLogout} className="btn btn-sm btn-outline">
              Logout
            </button>
          </div>
        ) : (
          <>
            <Link to="/login" className="btn btn-sm btn-outline mr-2 bg-[#064e3b] text-white">
              Login
            </Link>
            <Link to="/register" className="btn btn-sm bg-[#064e3b] text-white">
              Register
            </Link>
          </>
        )}

      </div>
    </div>
  );
}
