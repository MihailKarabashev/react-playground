import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../../services/authService";

import { AuthContext } from "../../contexts/AuthContext";

const Register = () => {
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const registerSubmitHandler = (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const email = formData.get('email');
        const password = formData.get('password');
        const repeatPass = formData.get('repeat-pass');


        if (password != repeatPass) {
        }

        register(email, password)
            .then(res => {
                login(res);
                navigate('/dashboard');
            });


    };

    return (
        <section id="register-page" className="register">
            <form id="register-form" method="POST" onSubmit={registerSubmitHandler}>
                <fieldset>
                    <legend>Register Form</legend>
                    <p className="field">
                        <label htmlFor="email">Email</label>
                        <span className="input">
                            <input type="text" name="email" id="email" placeholder="Email" />
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="password">Password</label>
                        <span className="input">
                            <input type="password" name="password" id="password" placeholder="Password" />
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="repeat-pass">Repeat Password</label>
                        <span className="input">
                            <input type="password" name="confirm-pass" id="repeat-pass" placeholder="Repeat Password" />
                        </span>
                    </p>
                    <input className="button submit" type="submit" value="Register" />
                </fieldset>
            </form>
        </section>
    );
}

export default Register;