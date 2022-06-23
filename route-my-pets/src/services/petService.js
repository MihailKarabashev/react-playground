const baseURl = 'http://localhost:3030/data';

const getAll = () => {
    return fetch(baseURl + '/data')
        .then(res => res.json());
}

const getOne = (petId) => {
    return fetch(baseURl + '/data/' + petId)
        .then(res => res.json());
}

const create = async (petData, token) => {
    try {
        let response = await fetch(baseURl + '/data', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'X-Authorization': token
            },
            body: JSON.stringify(petData)
        });

        let result = await response.json();

        if (!result.ok) {
            throw new Error(result);
        }
        return result;
    } catch (error) {
        alert(error.meesge);
    }
};

export {
    getAll,
    getOne,
    create
}