import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function GameDetails() {
  const id = useLocation().pathname.split("/")[2];
  const [gameDetails, setGameDetails] = useState(null);

  useEffect(() => {
    const fetchGameDetails = async () => {
      try {
        const response = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, {
          method: "GET",
          headers: {
            "x-rapidapi-key": "f55d0e2db6mshe843b6c6cfb5fa2p171bcejsnf6444255ae48",
            "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
          },
        });
        if (response.ok) {
          const data = await response.json();
          setGameDetails(data);
        } else {
          console.error(`Error: HTTP ${response.status}`);
        }
      } catch (error) {
        console.error("Error fetching game details:", error);
      }
    };

    fetchGameDetails();
  }, [id]);

  if (!gameDetails) {
    return (
      <div style={{ textAlign: "center", padding: "20px" }}>
        <h2>Loading Game Details...</h2>
      </div>
    );
  }

  return (
    <div>
      <div className="space" />
      <section className="overflow-hidden space-top space-extra-bottom">
        <div className="container">
          <div className="row ">
          
            <div className="col-md-6">
              <div className="game-card-img">
                <img
                  src={gameDetails.thumbnail}
                  alt={gameDetails.title}
                
                  style={{margin:" 70px", borderRadius:"10%", height:"100%"}}
                />
              </div>
            </div>

            
            <div className="col-md-6">
              <div className="game-card-details"style={{margin:"40px"}}>
                <h3 className="box-title text-center">{gameDetails.title}</h3>
                <p>
                  <strong>Type of Game:</strong> <span className="text-theme">{gameDetails.genre}</span>
                </p>
                <p>
                  <strong>Platform:</strong> <span className="text-theme">{gameDetails.platform}</span>
                </p>
                <p>
                  <strong>Description:</strong> <span>{gameDetails.short_description}</span>
                </p>
                <p>
                  <strong>Official Website:</strong>{" "}
                  <a
                    href={gameDetails.game_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#007BFF" }}
                  >
                    {gameDetails.game_url}
                  </a>
                </p>
                <p>
                  <strong>Publisher:</strong> <span>{gameDetails.publisher}</span>
                </p>
                <p>
                  <strong>Developer:</strong> <span>{gameDetails.developer}</span>
                </p>
                <p>
                  <strong>Release Date:</strong> <span>{gameDetails.release_date}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default GameDetails;
