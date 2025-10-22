// import React, { useContext, useState } from "react";
// import { AuthContext } from "../context/AuthProvider";
// import { useNavigate, useLocation, Link } from "react-router";

// export default function Login() {
//   const { login, googleLogin, resetPassword } = useContext(AuthContext);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();
//   const location = useLocation();
//   const from = location.state?.from?.pathname || "/";

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await login(email, password);
//       navigate(from, { replace: true });
//     } catch (err) {
//       console.error(err);
//       alert(err.message);
//     }
//   };

//   const handleGoogle = async () => {
//     try {
//       await googleLogin();
//       navigate(from, { replace: true });
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   const handleReset = async () => {
//     if (!email) return alert("Please enter your email to reset password.");
//     try {
//       await resetPassword(email);
//       // per assignment: redirect to Gmail (we'll open gmail.com)
//       window.open("https://mail.google.com", "_blank");
//     } catch (err) {
//       console.error(err);
//       alert(err.message);
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto">
//       <h2 className="text-2xl font-bold mb-4">Login</h2>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email" className="input input-bordered w-full" />
//         <input value={password} onChange={e=>setPassword(e.target.value)} type="password" placeholder="Password" className="input input-bordered w-full" />
//         <div className="flex justify-between items-center">
//           <button className="btn btn-primary">Login</button>
//           <button type="button" onClick={handleReset} className="link">Forgot password?</button>
//         </div>
//       </form>
//       <div className="mt-4">
//         <button onClick={handleGoogle} className="btn btn-outline w-full">Continue with Google</button>
//       </div>
//       <p className="mt-3 text-sm">No account? <Link to="/register" className="link">Register</Link></p>
//     </div>
//   );
// }


// import React, { useContext, useState } from "react";
// import { AuthContext } from "../context/AuthProvider";
// import { useNavigate, useLocation, Link } from "react-router";
// import { useSpring, animated } from "@react-spring/web";
// import { FaGoogle } from "react-icons/fa";

// export default function Login() {
//   const { login, googleLogin, resetPassword } = useContext(AuthContext);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [loggedIn, setLoggedIn] = useState(false);
//   const [userInfo, setUserInfo] = useState({ email: "" });

//   const navigate = useNavigate();
//   const location = useLocation();
//   const from = location.state?.from?.pathname || "/";

//   // React Spring animation
//   const animProps = useSpring({
//     opacity: loggedIn ? 1 : 0,
//     transform: loggedIn ? "translateY(0px)" : "translateY(-50px)",
//     config: { tension: 200, friction: 20 },
//   });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await login(email, password);
//       setUserInfo({ email }); // save user info
//       setLoggedIn(true);      // trigger animation
//       setTimeout(() => navigate(from, { replace: true }), 2000); // redirect after animation
//     } catch (err) {
//       console.error(err);
//       alert(err.message);
//     }
//   };

//   const handleGoogle = async () => {
//     try {
//       await googleLogin();
//       setUserInfo({ email: "Google User" });
//       setLoggedIn(true);
//       setTimeout(() => navigate(from, { replace: true }), 2000);
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   const handleReset = async () => {
//     if (!email) return alert("Please enter your email to reset password.");
//     try {
//       await resetPassword(email);
//       window.open("https://mail.google.com", "_blank");
//     } catch (err) {
//       console.error(err);
//       alert(err.message);
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto relative pt-5">
//       {!loggedIn && (
//         <>
//           <h2 className="text-2xl font-bold mb-4">Login</h2>
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <input
//               value={email}
//               onChange={e => setEmail(e.target.value)}
//               placeholder="Email"
//               className="input input-bordered w-full"
//             />
//             <input
//               value={password}
//               onChange={e => setPassword(e.target.value)}
//               type="password"
//               placeholder="Password"
//               className="input input-bordered w-full"
//             />
//             <div className="flex justify-between items-center">
//               <button className="btn btn-primary w-full">Login</button>
//               {/* <button type="button" onClick={handleReset} className="link">
//                 Forgot password?
//               </button> */}
//             </div>
//             <button type="button" onClick={handleReset} className="link">
//               Forgot password?
//             </button>
//           </form>
//           <div className="mt-4">
//             <button onClick={handleGoogle} className="btn bg-white text-black border-[#e5e5e5] w-full">
//               <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
//               <p className="text-red-600">Login with Google</p>
//             </button>
//           </div>
//           <p className="mt-3 text-sm">
//             No account? <Link to="/register" className="link text-blue-600">Register</Link>
//           </p>
//         </>
//       )}

//       {/* Animated user info card */}
//       {loggedIn && (
//         <animated.div
//           style={animProps}
//           className="absolute top-0 left-1/2 -translate-x-1/2 bg-green-500 text-white p-6 rounded-lg shadow-lg w-80 flex flex-col items-center"
//         >
//           <h3 className="text-xl font-bold mb-2">Welcome Back!</h3>
//           <p className="text-sm">Logged in as: {userInfo.email}</p>
//         </animated.div>
//       )}
//     </div>
//   );
// }

import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthProvider";
import { useNavigate, useLocation, Link } from "react-router";
import { useSpring, animated } from "@react-spring/web";

export default function Login() {
  const { login, googleLogin, resetPassword } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState({ email: "" });

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  // 🌀 React Spring animation
  const animProps = useSpring({
    opacity: loggedIn ? 1 : 0,
    transform: loggedIn ? "translateY(0px)" : "translateY(-50px)",
    config: { tension: 200, friction: 20 },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      setUserInfo({ email });
      setLoggedIn(true);
      setTimeout(() => navigate(from, { replace: true }), 2000);
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  const handleGoogle = async () => {
    try {
      await googleLogin();
      setUserInfo({ email: "Google User" });
      setLoggedIn(true);
      setTimeout(() => navigate(from, { replace: true }), 2000);
    } catch (err) {
      console.error(err);
    }
  };

  const handleReset = async () => {
    if (!email) return alert("Please enter your email to reset password.");
    try {
      await resetPassword(email);
      window.open("https://mail.google.com", "_blank");
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  return (
    <div
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1920&q=80')",
      }}
    >
      {/* 🔲 Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 w-full max-w-md bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 shadow-2xl text-white">
        {!loggedIn && (
          <>
            <h2 className="text-3xl font-bold text-center mb-6">Login</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="input input-bordered w-full bg-white/20 placeholder-gray-200 text-white"
              />
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Password"
                className="input input-bordered w-full bg-white/20 placeholder-gray-200 text-white"
              />

              <button className="btn btn-primary w-full text-white">
                Login
              </button>

              <button
                type="button"
                onClick={handleReset}
                className="link block text-center text-blue-300 hover:text-blue-400"
              >
                Forgot password?
              </button>
            </form>

            <div className="mt-4">
              <button
                onClick={handleGoogle}
                className="btn btn-outline w-full text-white border-white hover:bg-white hover:text-black transition"
              >
                <svg
                  aria-label="Google logo"
                  width="18"
                  height="18"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="mr-2"
                >
                  <path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path>
                  <path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path>
                  <path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path>
                  <path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path>
                </svg>
                Login with Google
              </button>
            </div>

            <p className="mt-4 text-sm text-center text-gray-200">
              No account?{" "}
              <Link
                to="/register"
                className="link text-blue-400 hover:text-blue-300 hover:underline"
              >
                Register
              </Link>
            </p>
          </>
        )}

        {/* ✅ Animated user info card */}
        {loggedIn && (
          <animated.div
            style={animProps}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-green-500 text-white p-6 rounded-lg shadow-lg w-80 flex flex-col items-center"
          >
            <h3 className="text-xl font-bold mb-2">Welcome Back!</h3>
            <p className="text-sm">Logged in as: {userInfo.email}</p>
          </animated.div>
        )}
      </div>
    </div>
  );
}
