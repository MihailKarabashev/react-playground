import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";

import * as authService from '../../services/authService';
import { AuthContext } from "../../contexts/AuthContext";

const Logout = () => {
    const { user, logout } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        console.log(user.accessToken);
        authService.logout(user.accessToken)
            .then(() => {
                logout();
                navigate('/dashboard');
            })
    }, []);


    return <p>Loading......</p>
}

export default Logout;