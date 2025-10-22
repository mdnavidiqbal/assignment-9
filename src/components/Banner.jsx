

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import GameCard from "./GameCard";

const Banner = () => {
  const [games, setGames] = useState([]);
  const sliderRef = useRef(null);
  useEffect(() => {
    fetch("/games.json")
      .then((res) => res.json())
      .then((data) => setGames(data))
      .catch((err) => console.error("Error loading games:", err));
  }, []);
  useEffect(() => {
    if (games.length > 0 && sliderRef.current) {
      const slider = sliderRef.current;
      const totalWidth = slider.scrollWidth / 2; 

      gsap.to(slider, {
        x: `-${totalWidth}px`,
        duration: 30,
        ease: "none",
        repeat: -1, 
        modifiers: {
          x: gsap.utils.unitize((x) => parseFloat(x) % totalWidth), 
        },
      });
    }
  }, [games]);

  return (
    <div
      className="hero min-h-screen relative overflow-hidden w-full"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1920&q=80)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>

      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-3xl">
          <h1 className="mb-5 text-5xl font-bold">Welcome to GameHub</h1>
          <p className="mb-8 text-sm">
            Explore the latest and most popular indie games from all over the
            world. Enjoy sliding through your favorite titles!
          </p>
          <div className="relative overflow-hidden w-full">
            <div ref={sliderRef} className="flex w-max gap-4">
              {[...games, ...games].map((game, i) => (
                <div key={i} className="w-72 flex-shrink-0">
                  <GameCard game={game} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
