const host = 'http://localhost:3030/data';

function getAll() {
    return fetch(host + '/games?sortBy=_createdOn%20desc')
        .then(res => res.json());
}
///data/games/:id
function getDetails(id) {
    return fetch(host + /games/ + id)
        .then(res => res.json());
}

export {
    getAll,
    getDetails,
}