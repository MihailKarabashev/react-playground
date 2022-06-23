const baseUrl = 'http://localhost:3030';

export const login = async (email, password) => {
    let res = await fetch(baseUrl + '/users/login', {
        method: 'post',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    });

    let jsonResponse = res.json();

    if (!jsonResponse.ok) {
        throw jsonResponse.message;
    }

    return jsonResponse;
};

export const getUser = () => {
    let username = localStorage.getItem('username');

    return username;
};

export const isAuthenticated = () => {
    return Boolean(getUser())
};

export const logout = () => {
    fetch(baseUrl + '/users/logout');
};