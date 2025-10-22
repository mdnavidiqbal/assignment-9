// src/components/GameCard.jsx
import React from "react";
import { Link } from "react-router";
import { FaStar } from "react-icons/fa";

export default function GameCard({ game }) {
  return (
    <div key={game.id} className="card shadow-lg">
      <figure>
        <img
          src={game.coverPhoto}
          alt={game.title}
          className="w-full h-48 object-cover"
        />
      </figure>
      <div className="card-body">
        <h3 className="card-title">{game.title}</h3>
        <div className="flex justify-between items-center gap-2 text-sm text-gray-700">
          <p>{game.category}</p>
          Rating: <span className="flex items-center gap-1 text-yellow-400">
            {game.ratings}
            <FaStar className="text-yellow-400" />
          </span>
        </div>
        <div className="card-actions mt-2">
          <Link to={`/gamedetails/${game.id}`} className="btn btn-primary">
            Details
          </Link>
        </div>
      </div>
    </div>
  );
}
