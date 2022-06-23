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
    let response = await fetch(baseURl + '/pets', {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-Authorization': token
        },
        body: JSON.stringify(petData)
    });

    let result = await response.json();

    return result;
};

export {
    getAll,
    getOne,
    create
}