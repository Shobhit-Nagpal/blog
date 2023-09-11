import "../styles/RegisterForm.css";
import "../styles/index.css";

function RegisterForm() {
        
    return (
    <div className="register_form">
        <h1 className="register_form_heading"> Register </h1>
        <form>
                <label htmlFor="username">Username</label>
                <input type="text" placeholder="Username" name="username" required={true} />
                
                <label htmlFor="password">Password</label>
                <input type="password" placeholder="Password" name="password" required={true} />
                
                <label htmlFor="confirmpassword">Confirm password</label>
                <input type="password" name="confirmpassword" required={true} />


                <button className="register_form_btn">Register</button>
        </form>
    </div>
    )

}

export default RegisterForm;
