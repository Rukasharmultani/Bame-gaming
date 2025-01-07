import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const GameSection = () => {
  const [games, setGames] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGames = async () => {
      const url =
        "https://free-to-play-games-database.p.rapidapi.com/api/games?platform=browser&category=mmorpg&sort-by=release-date";
      const options = {
        method: "GET",
        headers: {
          "x-rapidapi-key": "f55d0e2db6mshe843b6c6cfb5fa2p171bcejsnf6444255ae48",
          "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
        },
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json();
        setGames(result);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchGames();
  }, []);

  return (
    <section className="game-area-3 space-bottom overflow-hidden">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-lg-auto">
            <div className="title-area custom-anim-top wow" data-wow-duration="1.5s" data-wow-delay="0.2s">
              <span className="sub-title style3">
                <span className="sub-title-shape icon-masking">
                  <span
                    className="mask-icon"
                    style={{ backgroundImage: `url('assets/img/bg/section-title-bg.svg')` }}
                  ></span>
                </span>
                Our Latest Game
              </span>
              <h2 className="sec-title">
                Best Video Games In <span className="text-theme">2024</span>
              </h2>
              <p>The rise of mobile gaming has significantly expanded the gaming audience</p>
            </div>
          </div>
        </div>
        <div className="row gy-4 filter-active">
          {error && (
            <div className="col-12">
              <p className="text-danger text-center">Error: {error}</p>
            </div>
          )}
          {games.slice(0, 9).map((game) => (
            <div key={game.id} className="col-lg-4 col-md-6 filter-item cat1">
              <div className="game-card style3">
                <div className="game-card-img">
                  <Link to={`/game/${game.id}`}>
                    <span className="game-rating">
                      <i className="fas fa-star" /> {game.rating}
                    </span>
                    <img src={game.thumbnail} alt={game.title} />
                  </Link>
                </div>
                <div className="game-card-details">
                  <div className="game-tag">{game.platform}</div>
                  <h5 className="box-title">
                    <Link to={`/game/${game.id}`}>{game.title}</Link>
                  </h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GameSection;
