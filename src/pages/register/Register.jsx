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
          <div className="flex flex-col w-full justify-center items-center">
           <button className="">Register</button>
           <div className="flex ">
           <span className="text-black font-bold sm:hidden">Do you have an account?</span>
            <Link to="/login" className="block text-blue-700 cursor-pointer sm:hidden" title="Click here to login page">
            Login 
          </Link>
          </div>
          </div>
           </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;