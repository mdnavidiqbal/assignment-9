import React from "react";
import { Link } from "react-router";

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center min-h-[70vh] text-center">
      <h1 className="text-6xl font-bold text-error mb-4">404</h1>
      <h2 className="text-2xl mb-2">Page Not Found</h2>
      <p className="text-gray-600 mb-6">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link to="/" className="btn btn-primary">
        Go Back Home
      </Link>
    </div>
  );
}
