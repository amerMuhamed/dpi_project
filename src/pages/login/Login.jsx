import "./login.scss"

const Login = () => {
  return (
    <div className="h-screen bg- bg-background flex items-center justify-center">
      <div className="flex shadow-md w-[750px] bg-white rounded-xl h-[400px] overflow-hidden">
    <div className="flex-1  bg-[url(https://www.krea.ai/api/img?f=webp&i=https%3A%2F%2Ftest1-emgndhaqd0c9h2db.a01.azurefd.net%2Fimages%2F69ada894-ff43-4a16-9797-b4334ab6b2b8.png)] bg-cover bg-center  p-10 flex flex-col items-center justify-center  gap-16 text-white">
          <h1 className="text-6xl leading-[70px] font-serif ">Welcome</h1>
            <div className="flex  flex-col items-center">
          <span className="text-  text-stone-200 ">Do you have an account?</span>
          <button className=" w-1/2 text-lg bg-red-300 hover:bg-red-900 text-black p-2 border-0 rounded-md cursor-pointer">Register</button>
          </div>
        </div>
        <div className="flex-1 p-10 flex flex-col items-center gap-12">
          <h1 className="text-6xl font-mono font-medium text-teal-700 p-2">Login</h1>
          <form className="flex flex-col gap-10 items-center">
            <input className=" border-0 border-b-2 border-b-red-300 outline-none h-7 text-xl " type="text" placeholder="Username" />
            <input className=" border-0 border-b-2 border-b-red-300 outline-none h-7 text-xl " type="password" placeholder="Password" />
            <button className="w-1/2 bg-yellow-800 hover:bg-red-900 text-white text-lg  p-2 border-0 rounded-md cursor-pointer">Login</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
