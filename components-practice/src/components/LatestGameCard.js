const LatestGameCard = ({
    game,
    navigationChangeHandler
}) => {

    const onClick = (e) => {
        e.preventDefault();
        navigationChangeHandler(`/details/${game._id}`);
    }
    return (
        <div className="game">
            <div className="image-wrap">
                <img src={game.imageUrl} alt={game.title} />
            </div>
            <h3>{game.title}</h3>
            <div className="rating">
                <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
            </div>
            <div className="data-buttons">
                <a onClick={onClick} href={`/details/${game._id}`} className="btn details-btn">Details</a>
            </div>
        </div>
    );
}


export default LatestGameCard;