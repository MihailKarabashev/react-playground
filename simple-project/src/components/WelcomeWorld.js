import { useState, useEffect } from "react";
import * as gameService from '././services/gameService';

import LatestGameCard from "./LatestGameCard";

const WelcomeWorld = () => {
    const [latestGames, setLatestGames] = useState([]);

    useEffect(() => {
        gameService.getLatest()
            .then(res => {
                setLatestGames(res);
            });
    }, []);

    return (
        <section id="welcome-world">
            <div className="welcome-message">
                <h2>ALL new games are</h2>
                <h3>Only in GamesPlay</h3>
            </div>
            <img src="./images/four_slider_img01.png" alt="hero" />

            <div id="home-page">
                <h1>Latest Games</h1>

                {latestGames.length > 0
                    ? latestGames.map(game =>
                        <LatestGameCard
                            key={game._id}
                            game={game}
                        />)
                    : <p className="no-articles">No games yet</p>
                }

            </div>
        </section>
    );
}

export default WelcomeWorld;