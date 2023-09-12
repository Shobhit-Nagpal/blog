import "../styles/LoginForm.css";
import "../styles/index.css";
import { useState } from "react";
import { Navigate } from "react-router-dom";

function LoginForm() {
        
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [redirect, setRedirect] = useState(false);

    async function loginUser(e) {
        e.preventDefault();
        const response = await fetch("http://localhost:4000/login", {
            method: "POST",
            body: JSON.stringify({ username, password })
        });

        if (response.status !== 200) {
            alert("Login failed");
            return;
        }
        else {
            setRedirect(true);
        }
    }

    if (redirect) {
        return <Navigate to={ "/" } />;
    }

    return (
    <div className="login_form">
        <h1 className="login_form_heading"> Login </h1>
        <form onSubmit={ loginUser }>
                <label htmlFor="username">Username</label>
                <input type="text" placeholder="Username" name="username" required={true} value={ username } onChange={ (e) =>setUsername(e.target.value) } />
                
                <label htmlFor="password">Password</label>
                <input type="password" placeholder="Password" name="password" required={true} value={ password } onChange={ (e) => setPassword(e.target.value) } />

                <button>Login</button>
        </form>
    </div>
    )

}

export default LoginForm;
