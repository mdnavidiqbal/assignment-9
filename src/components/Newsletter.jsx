import React, { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return alert("Please enter your email!");
    setSubmitted(true);
    setEmail("");
  };

  if (submitted)
    return (
      <div className="bg-success text-white text-center p-6 rounded-xl mt-10">
        🎉 Thanks for subscribing to our newsletter!
      </div>
    );

  return (
    <section className="mt-9 p-8 text-center">
      <h2 className="text-2xl font-semibold mb-3">Subscribe to our Newsletter</h2>
      <p className="text-sm mb-4 text-gray-600">
        Get updates about new indie games and developer stories.
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-3 justify-center">
        <input
          type="email"
          placeholder="Enter your email"
          className="input input-bordered w-full md:w-1/2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button className="btn btn-primary" type="submit">Subscribe</button>
      </form>
    </section>
  );
}
