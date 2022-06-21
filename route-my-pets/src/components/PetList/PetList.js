import { useState, useEffect } from "react";
import { getAll } from '../../services/petService';

import PetCard from "./PetCard/PetCard";

const PetList = () => {
    const [pets, setPets] = useState([]);

    useEffect(() => {
        getAll().then(result => {
            setPets(Object.values(result));
        });
    }, []);

    return (
        <ul className="other-pets-list">
            {
                pets.length > 0
                    ? pets.map(pet => <PetCard key={pet._id} pet={pet} />)
                    : <p className="no-pets">No pets in database!</p>
            }
        </ul>
    );
}

export default PetList;