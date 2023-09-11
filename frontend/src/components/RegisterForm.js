import "../styles/RegisterForm.css";
import "../styles/index.css";
import { useState } from "react";
import { Navigate } from "react-router-dom";

function RegisterForm() {

    const [firstname, setFirstName] = useState("");
    const [familyname, setFamilyName] = useState("");
    const [username, setUsername] = useState(""); 
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmPassword] = useState("");
    const [redirect, setRedirect] = useState(false);

    async function registerUser(e) {
        e.preventDefault();

        const response = await fetch("http://localhost:4000/register", {
            method: "POST",
            body: JSON.stringify({ firstname, familyname, username, password, confirmpassword }),
            headers: {"Content-Type": "application/json"}
        });

        if (response.status !== 200) {
            alert("Registration failed!");
            return;
        }
        else {
            setRedirect(true);
        }
    }

    if (redirect) {
        return <Navigate to={ "/" } />
    }

    return (
    <div className="register_form">
        <h1 className="register_form_heading"> Register </h1>
        <form onSubmit={ registerUser }>
                <label htmlFor="firstname">First name</label>
                <input type="text" placeholder="First name" name="firstname" required={true} value={ firstname} onChange={ (e) => setFirstName(e.target.value) } />
                
                <label htmlFor="familyname">Family name</label>
                <input type="text" placeholder="Family name" name="familyname" required={true} value={ familyname } onChange={ (e) => setFamilyName(e.target.value) } />

                <label htmlFor="username">Username</label>
                <input type="text" placeholder="Username" name="username" required={true} value={ username } onChange={ (e) => setUsername(e.target.value) } />
                
                <label htmlFor="password">Password</label>
                <input type="password" placeholder="Password" name="password" required={true} value={ password } onChange={ (e) => setPassword(e.target.value) } />
                
                <label htmlFor="confirmpassword">Confirm password</label>
                <input type="password" name="confirmpassword" required={true} value={ confirmpassword } onChange={ (e) => setConfirmPassword(e.target.value) } />


                <button className="register_form_btn">Register</button>
        </form>
    </div>
    )

}

export default RegisterForm;
