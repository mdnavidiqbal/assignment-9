// import React, { useEffect, useState } from "react";
// import { Link } from "react-router";
// import Newsletter from "../components/Newsletter";

// // Home.jsx এর return অংশের একদম শেষে Newsletter দেখাও



// export default function Home() {
//   const [games, setGames] = useState([]);

//   useEffect(() => {
//     fetch("/games.json")
//       .then(res => res.json())
//       .then(data => setGames(data))
//       .catch(err => console.error(err));
//   }, []);

//   return (
//     <div>
//       <section className="mb-8">
//         <h1 className="text-3xl font-bold text-center">Welcome to GameHub</h1>
//         <p className="text-sm text-gray-600 text-center">Discover indie games and support devs.</p>
//       </section>

//       <section id="popular">
//         <h2 className="text-2xl font-semibold mb-4">Popular Games</h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//           {games.slice(0, 6).map(game => (
//             <div key={game.id} className="card shadow-lg">
//               <figure>
//                 <img src={game.coverPhoto} alt={game.title} className="w-full h-48 object-cover"/>
//               </figure>
//               <div className="card-body">
//                 <h3 className="card-title">{game.title}</h3>
//                 <p>{game.category} • Rating: {game.ratings}</p>
//                 <div className="card-actions">
//                   <Link to={`/game/${game.id}`} className="btn btn-primary">Details</Link>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>
//       <section>
//         <Newsletter />
//       </section>
//     </div>
//   );
// }


// import React, { useEffect, useState, useRef } from "react";
// import { Link, useLocation } from "react-router";
// import Newsletter from "../components/Newsletter";
// import { FaStar } from "react-icons/fa";
// import Banner from "../components/Banner";

// export default function Home() {
//   const [games, setGames] = useState([]);
//   const location = useLocation();
//   const popularRef = useRef(null);

//   // Check query string
//   const query = new URLSearchParams(location.search);
//   const showPopularOnly = query.get("popular") === "true";

//   useEffect(() => {
//     fetch("/games.json")
//       .then(res => res.json())
//       .then(data => setGames(data))
//       .catch(err => console.error(err));
//   }, []);

//   // Scroll to Popular section if query exists
//   useEffect(() => {
//     if (showPopularOnly && popularRef.current) {
//       popularRef.current.scrollIntoView({ behavior: "smooth" });
//     }
//   }, [showPopularOnly, games]); // scroll after games load

//   // Decide which games to show
//   const displayGames = showPopularOnly ? games.slice(0, 3) : games;

//   return (
//     <div>
//       <Banner></Banner>
//       <section className="mb-8">
//         <h1 className="text-3xl font-bold text-center">Welcome to GameHub</h1>
//         <p className="text-sm text-gray-600 text-center">Discover indie games and support devs.</p>
//       </section>

//       <section id="popular" ref={popularRef}>
//         <h2 className="text-2xl font-semibold mb-4">Popular Games</h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//           {displayGames.map(game => (
//             <div key={game.id} className="card shadow-lg">
//               <figure>
//                 <img src={game.coverPhoto} alt={game.title} className="w-full h-48 object-cover"/>
//               </figure>
//               <div className="card-body">
//                 <h3 className="card-title">{game.title}</h3>
//                 {/* <p>{game.category} • Rating: {game.ratings}</p> */}
//                 <div className="flex justify-between">
//                     <p>{game.category}</p>
//                     <p></p><span className="flex items-center gap-1">Ratting: {game.ratings} <FaStar></FaStar> </span>
//                 </div>
//                 <div className="card-actions">
//                   <Link to={`/gamedetails/${game.id}`} className="btn btn-primary">Details</Link>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//         <Newsletter />

//       </section>

//       <section>
//         {/* <Newsletter /> */}
//       </section>
//     </div>
//   );
// }




import React, { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router";
import Newsletter from "../components/Newsletter";
import Banner from "../components/Banner";
import GameCard from "../components/GameCard"; // <-- Import here

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
            <GameCard key={game.id} game={game} /> // <-- Use GameCard here
          ))}
        </div>
        <Newsletter />
      </section>
    </div>
  );
}
