export const login = async (email, password) => {
    let res = await fetch('http;//localhost:3030/users/login', {
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
    localStorage.removeItem('username');
};