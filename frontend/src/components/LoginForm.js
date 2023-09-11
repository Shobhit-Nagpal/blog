import "../styles/LoginForm.css";
import "../styles/index.css";

function LoginForm() {
        
    return (
    <div className="login_form">
        <h1 className="login_form_heading"> Login </h1>
        <form>
                <label htmlFor="username">Username</label>
                <input type="text" placeholder="Username" required={true} />
                
                <label htmlFor="password">Password</label>
                <input type="password" placeholder="Password" required={true} />

                <button>Login</button>
        </form>
    </div>
    )

}

export default LoginForm;
