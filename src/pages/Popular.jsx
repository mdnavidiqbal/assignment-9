import React, { useEffect, useState } from "react";
import { Link } from "react-router";

export default function Popular() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch("/games.json")
      .then(res => res.json())
      .then(data => {
        const sorted = data.sort((a, b) => parseFloat(b.ratings) - parseFloat(a.ratings));
        setGames(sorted.slice(0, 3));
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold mb-6 text-center">Popular Games</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {games.map(game => (
          <div key={game.id} className="card shadow-lg">
            <figure>
              <img src={game.coverPhoto} alt={game.title} className="w-full h-48 object-cover"/>
            </figure>
            <div className="card-body">
              <h3 className="card-title">{game.title}</h3>
              <p>{game.category} • Rating: {game.ratings}</p>
              <div className="card-actions">
                <Link to={`/gamedetails/${game.id}`} className="btn btn-primary">Details</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
