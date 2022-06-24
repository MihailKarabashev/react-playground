import { useContext } from 'react';
import { create } from '../../services/petService';
import { useNavigate } from 'react-router-dom';

import { AuthContext } from '../../contexts/AuthContext';

const Create = () => {
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);

    const onPetCreate = (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        let name = formData.get('name');
        let description = formData.get('description');
        let imageUrl = formData.get('imageUrl');
        let type = formData.get('type');

        let object = { name, description, imageUrl, type };

        create(object, user.accessToken)
            .then(result => {
                navigate('/dashboard');
            });
    };
    return (
        <section id="create-page" className="create">
            <form id="create-form" method="POST" onSubmit={onPetCreate}>
                <fieldset>
                    <legend>Add new Pet</legend>
                    <p className="field">
                        <label htmlFor="name">Name</label>
                        <span className="input">
                            <input type="text" name="name" id="name" placeholder="Name" />
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="description">Description</label>
                        <span className="input">
                            <textarea name="description" id="description" placeholder="Description"></textarea>
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="image">Image</label>
                        <span className="input">
                            <input type="text" name="imageUrl" id="image" placeholder="Image" />
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="type">Type</label>
                        <span className="input">
                            <select id="type" name="type">
                                <option value="cat">Cat</option>
                                <option value="dog">Dog</option>
                                <option value="parrot">Parrot</option>
                                <option value="reptile">Reptile</option>
                                <option value="other">Other</option>
                            </select>
                        </span>
                    </p>
                    <input className="button submit" type="submit" value="Add Pet" />
                </fieldset>
            </form>
        </section>
    );
}

export default Create;