 
import Header from "./Header";
import { useState } from "react";
 const Login=()=>{
    const [isSignInForm,setIsSignInForm]=useState(true);
     const [email, setEmail] = useState("");
     const [password, setPassword] = useState(""); 
    const toggleSignInForm=()=>{
        setIsSignInForm(!isSignInForm);
    };
    return (
        <div className="min-h-screen flex items-center justify-center bg-black bg-opacity-70">
            <Header />
        <div className="absolute">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/8200f588-2e93-4c95-8eab-ebba17821657/web/IN-en-20250616-TRIFECTA-perspective_9cbc87b2-d9bb-4fa8-9f8f-a4fe8fc72545_large.jpg"
        alt="logo"/>
      </div>
      <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-5 left-5 text-white rounded-lg bg-opacity-80 ">
      <h1 className="font-bold text-3xl py-4">{isSignInForm?"Sign In":"Sign Up"}</h1>
      <input type="text"
      placeholder="Email Address"
      className="p-4 my-4 w-full bg-gray-700"  value={email}
          onChange={(e) => setEmail(e.target.value)}
       />
      <input type="password"
      placeholder="password"
      className="p-4 my-4 w-full bg-gray-700" value={password}
          onChange={(e) => setPassword(e.target.value)}
       />
       <button className="w-full p-4 my-6 bg-red-600 rounded-lg">Sign In</button>
       <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
        {isSignInForm
        ?"New to NetfliX?Sign Up Now":
        "Already Registered? Sign In Now"}</p>
      </form>
        </div>
    )
}
export default Login;