const baseURl = 'http://localhost:3030/data';

const getAll = () => {
    return fetch(baseURl + '/pets')
        .then(res => res.json());
}

const getOne = (petId) => {
    return fetch(baseURl + '/pets/' + petId)
        .then(res => res.json());
}

const create = async (petData, token) => {
    try {
        let response = await fetch(baseURl + '/pets', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'X-Authorization': token
            },
            body: JSON.stringify({ ...petData, likes: 0 })
        });

        let result = await response.json();

        return result;
    } catch (error) {
        alert(error.meesge);
    }
};

const remove = (petId, token) => {
    return fetch(baseURl + '/pets/' + petId, {
        method: 'DELETE',
        headers: {
            'X-Authorization': token
        }
    })
        .then(res => res.json());
};

export {
    getAll,
    getOne,
    create,
    remove
}