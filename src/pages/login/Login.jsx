import { Link } from "react-router-dom";
import "./login.scss";

const Login = () => {
  return (
    <div className="h-screen bg-background flex items-center justify-center">
      <div className="flex shadow-md w-[750px] bg-white rounded-none sm:rounded-xl sm:h-[400px] h-fit overflow-hidden flex-col sm:flex-row">
        {/* Left Section (Image in Desktop View) */}
        <div className="flex-1 bg-custom-bg bg-cover bg-center p-10 flex flex-col items-center justify-around gap-16 text-white hidden sm:flex">
          <h1 className="text-6xl leading-[70px] font-serif">Welcome</h1>
          <div className="flex flex-col items-center">
            <span className="text-stone-200">Don't you have an account yet?</span>
            <Link to="/register" className="text-center w-full">
              <button className="w-1/2 text-lg bg-red-300 hover:bg-red-900 text-black p-2 border-0 rounded-md cursor-pointer">
                Register
              </button>
            </Link>
          </div>
        </div>

        <div className="flex-1 bg-custom-bg ">
          <div className="flex flex-col items-center gap-12 sm:bg-white  w-full h-full"> 
            <h1 className="text-6xl text-white font-mono font-medium sm:text-teal-700 p-2">
              Login
            </h1>
            <form className="flex flex-col gap-10 items-center">
              <input
                className="border-0 border-b-2 p-6 rounded-2xl border-b-red-300 h-7 text-xl"
                type="text"
                placeholder="Username"
              />
              <input
                className="border-0 border-b-2 p-6 rounded-2xl border-b-red-300 h-7 text-xl"
                type="password"
                placeholder="Password"
              />
            
                <div className="text-center">
              <button className="w-32  bg-yellow-800 hover:bg-red-900 text-white text-xxl p-3 border-0 rounded-md cursor-pointer">
                Login
              </button>
              </div>
              <div className="flex gap-1">
              <span className="text-black font-bold sm:hidden">Don't you have an account yet?</span>
              <Link to="/register" className="w-fit text-center block sm:hidden font-bold font-mono text-blue-500 ">
              Signup
               </Link>
               </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
