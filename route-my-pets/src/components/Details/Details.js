import { useParams, useNavigate, Link } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import { getOne, remove } from '../../services/petService';

import { AuthContext } from '../../contexts/AuthContext';

const Details = () => {
    const [pet, setPet] = useState({});
    const { petId } = useParams();
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        getOne(petId).then(result => {
            setPet(result);
        });
    }, []);

    const deleteHandler = (e) => {
        e.preventDefault();

        remove(petId, user.accessToken).then(res => {
            console.log(res);
            navigate('/dashboard');
        });
    };

    const editHandler = (e) => {

    };

    const ownerButtons = (
        <>
            <Link className="button" to="#" onClick={editHandler} >Edit</Link>
            <a className="button" href="#" onClick={deleteHandler}>Delete</a>
        </>
    );

    const userButton = (
        <a className="button" href="#">Like</a>
    );


    return (
        <section id="details-page" className="details">
            <div className="pet-information">
                <h3>Name: {pet.name}</h3>
                <p className="type">Type: {pet.type}</p>
                <p className="img"><img src={pet.imageUrl} alt='' /></p>
                <div className="actions">
                    {
                        user._id && (user._id == pet._ownerId
                            ? ownerButtons
                            : userButton
                        )}

                    <div className="likes">
                        <img className="hearts" src="/images/heart.png" alt={pet.name} />
                        <span id="total-likes">Likes: {pet.likes}</span>
                    </div>
                </div>
            </div>
            <div className="pet-description">
                <h3>Description:</h3>
                <p>{pet.description}</p>
            </div>
        </section>
    );
}

export default Details;