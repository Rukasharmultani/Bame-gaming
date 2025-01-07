import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Search() {
  const [games, setGames] = useState([]);
  const [query, setQuery] = useState("");
  const search = new URLSearchParams(useLocation().search).get("query");

  useEffect(() => {
    if (search) {
      setQuery(search);
    }
  }, [search]);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const url = `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${query || "shooter"}`;
        const options = {
          method: "GET",
          headers: {
            "x-rapidapi-key": "f55d0e2db6mshe843b6c6cfb5fa2p171bcejsnf6444255ae48",
            "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
          },
        };
        
        const response = await fetch(url, options);
        const data = await response.json();
        setGames(data);
      } catch (error) {
        console.error("Error fetching games:", error);
      }
    };

    if (query) {
      fetchGames();
    } else {
      setGames([]);
    }
  }, [query]);

  return (
    <div>
      <div className="space" />
      <section className="overflow-hidden space-top space-extra2-bottom">
        <div className="container">
          {games.length > 0 ? (
            <div className="row gy-4">
              {games.map((game) => (
                <div className="col-lg-4 col-md-6" key={game.id}>
                  <div className="game-card style4">
                    <div className="game-card-img">
                      <Link to={`/game/${game.id}`}>
                        <img src={game.thumbnail} alt={game.title} />
                      </Link>
                      <div className="game-logo">
                        <img src={game.thumbnail} alt={`${game.title} logo`} />
                      </div>
                    </div>
                    <div className="game-card-details">
                      <h3 className="box-title">
                        <Link to={`/game/${game.id}`}>{game.title}</Link>
                      </h3>
                      <p className="game-content">
                        Type of games: <span className="text-theme">{game.genre}</span>
                      </p>
                      <p className="game-content">
                        Platform: <span className="text-theme">{game.platform}</span>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p>No results found for "{query}".</p>
          )}
        </div>
      </section>
    </div>
  );
}
