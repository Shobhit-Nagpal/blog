import "../styles/AdminForm.css";
import "../styles/index.css";
import { useState } from "react";
import { Navigate } from "react-router-dom";

function AdminForm() {
        
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [redirect, setRedirect] = useState(false);

    async function adminUser(e) {
        e.preventDefault();
        const response = await fetch("http://localhost:4000/admin", {
            method: "POST",
            body: JSON.stringify({ username, password }),
            credentials: "include",
            headers: {"Content-Type": "application/json"}
        });

        if (response.status !== 200) {
            alert("Verify failed");
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
    <div className="admin_form">
        <h1 className="admin_form_heading"> Verify </h1>
        <form onSubmit={ adminUser }>
                <label htmlFor="username">Username</label>
                <input type="text" placeholder="Username" name="username" required={true} value={ username } onChange={ (e) => setUsername(e.target.value) } />
                
                <label htmlFor="password">Password</label>
                <input type="password" placeholder="Password" name="password" required={true} value={ password } onChange={ (e) => setPassword(e.target.value) } />

                <button>Verify</button>
        </form>
    </div>
    )

}

export default AdminForm;
