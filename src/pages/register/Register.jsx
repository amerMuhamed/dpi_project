import { Link } from "react-router-dom";
import "./register.scss";

const Register = () => {
  return (
    <div className="register">
      <div className="card">
        <div className="left hidden sm:flex">
          <h1>Hello</h1>
         <div>
          <Link to="/login" title="Click here to login page">
          <button >Login</button>
          </Link>
         </div>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="text" placeholder="Name" />
           <div className="flex justify-around items-center">
           <button>Register</button>
            <Link to="/login" className="block sm:hidden" title="Click here to login page">
            Login Page
          </Link>
           </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;