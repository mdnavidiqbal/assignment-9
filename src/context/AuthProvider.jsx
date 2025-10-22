import React, { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "../firebase/config";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  // ================= STATE ==================
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();

  // ================= REGISTER ==================
  const register = async (email, password, name, photoURL) => {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      if (name || photoURL) {
        await updateProfile(res.user, {
          displayName: name,
          photoURL: photoURL,
        });
      }
      console.log("✅ Registration successful:", res.user);
      return res.user;
    } catch (error) {
      console.error("❌ Register Error:", error.message);
      throw error;
    }
  };

  // ================= LOGIN ==================
  const login = async (email, password) => {
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      console.log("✅ Login successful:", res.user);
      return res.user;
    } catch (error) {
      console.error("❌ Login Error:", error.message);
      throw error;
    }
  };

  // ================= GOOGLE LOGIN ==================
  const googleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log("✅ Google login success:", result.user);
      return result.user;
    } catch (error) {
      console.error("❌ Google login failed:", error);
      alert("Google login failed: " + error.message);
      throw error;
    }
  };

  // ================= LOGOUT ==================
  const logout = async () => {
    try {
      await signOut(auth);
      console.log("✅ Logged out successfully");
    } catch (error) {
      console.error("❌ Logout Error:", error.message);
    }
  };

  // ================= RESET PASSWORD ==================
  const resetPassword = async (email) => {
    try {
      await sendPasswordResetEmail(auth, email);
      alert("Password reset email sent! Please check your inbox.");
      window.open("https://mail.google.com", "_blank"); // Assignment requirement অনুযায়ী
    } catch (error) {
      console.error("❌ Reset Password Error:", error.message);
      alert(error.message);
    }
  };

  // ================= UPDATE PROFILE ==================
  const updateUserProfile = async (profile) => {
    try {
      await updateProfile(auth.currentUser, profile);
      setUser({ ...auth.currentUser }); // refresh current user info
      console.log("✅ Profile updated:", profile);
    } catch (error) {
      console.error("❌ Update Profile Error:", error.message);
      throw error;
    }
  };

  // ================= OBSERVER ==================
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  // ================= CONTEXT VALUE ==================
  const authInfo = {
    user,
    loading,
    register,
    login,
    googleLogin,
    logout,
    resetPassword,
    updateUserProfile,
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
}
