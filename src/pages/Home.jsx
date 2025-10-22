
import React, { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router";
import Newsletter from "../components/Newsletter";
import Banner from "../components/Banner";
import GameCard from "../components/GameCard";

export default function Home() {
  const [games, setGames] = useState([]);
  const location = useLocation();
  const popularRef = useRef(null);

  const query = new URLSearchParams(location.search);
  const showPopularOnly = query.get("popular") === "true";

  useEffect(() => {
    fetch("/games.json")
      .then((res) => res.json())
      .then((data) => setGames(data))
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    if (showPopularOnly && popularRef.current) {
      popularRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [showPopularOnly, games]);

  const displayGames = showPopularOnly ? games.slice(0, 3) : games;

  return (
    <div className="mx-auto" >
      <Banner />
      <section className="mb-8">
        <h1 className="text-3xl font-bold text-center pt-5 ">Welcome to GameHub</h1>
        <p className="text-sm text-gray-600 text-center">
          Discover indie games and support devs.
        </p>
      </section>

      <section className="w-11/12 mx-auto" id="popular" ref={popularRef}>
        <h2 className="text-2xl font-semibold mb-4">Popular Games</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {displayGames.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
        <Newsletter />
      </section>
    </div>
  );
}
