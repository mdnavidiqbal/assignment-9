import React, { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router";
import { AuthContext } from "../context/AuthProvider";
import { FaStar } from "react-icons/fa6";

export default function GameDetails() {
  const { id } = useParams();
  const [game, setGame] = useState(null);
  const { user, loading } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    
    if (!loading && !user) {
      navigate("/login", { state: { from: `/games/${id}` } });
    }
  }, [user, loading, navigate, id]);

  useEffect(() => {
    fetch("/games.json")
      .then((res) => res.json())
      .then((data) => {
        const g = data.find((x) => String(x.id) === String(id));
        setGame(g);
      });
  }, [id]);

  if (loading) return <div className="text-center py-10">Checking login...</div>;
  if (!user) return null;

  if (!game)
    return (
      <div className="text-center py-10 text-gray-500">
        Loading game details...
      </div>
    );

  return (
    <div className="max-w-3xl mx-auto py-10">
      <h1 className="text-4xl font-bold mb-4 text-center">{game.title}</h1>
      <img
        src={game.coverPhoto}
        alt={game.title}
        className="w-full h-72 object-cover rounded-lg shadow-lg"
      />
      <p className="mt-6 text-lg leading-relaxed text-gray-700">
        {game.description}
      </p>

      <p className="mt-4 flex items-center gap-2 text-gray-600">
        <span>🎮 Developer: {game.developer}</span> •
        <span>Category: {game.category}</span> •
        <span className="flex items-center gap-1">
          Rating: {game.ratings} <FaStar className="text-yellow-400" />
        </span>
      </p>

      <div className="mt-6 text-center">
        <a
          href={game.downloadLink}
          target="_blank"
          rel="noreferrer"
          className="btn btn-primary px-8 text-white"
        >
          Visit / Install
        </a>
      </div>
    </div>
  );
}
