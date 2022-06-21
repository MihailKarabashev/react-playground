const baseURl = 'http://localhost:3030/jsonstore';

const getAll = () => {
    return fetch(baseURl + '/pets')
        .then(res => res.json());
}

export {
    getAll
}