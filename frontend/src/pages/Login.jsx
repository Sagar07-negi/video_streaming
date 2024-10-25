import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const[activetab,setactivetab]=useState("User")

  return (
    <div className="flex justify-center items-center min-h-screen ">
      <div className="logindiv bg-[#f1f1f1] min-w-16 py-4 px-8">
        <h2 className="font-bold text-center uppercase text-2xl my-3">Login Form</h2>
        <div className="loginbtns flex justify-center gap-4 my-4">
          <button onClick={()=>{setactivetab("User")}} className={`text-lg font-bold py-4 px-14 rounded-sm ${activetab==="User"?"bg-[#000] text-white":"bg-[#a6aeb9]"}`}>User</button>
          <button onClick={()=>{setactivetab("Creator")}} className={`text-lg font-bold py-4 px-14 rounded-sm ${activetab==="Creator"?"bg-[#000] text-white":"bg-[#a6aeb9]"}`}>Creator</button>
          <button onClick={()=>{setactivetab("Admin")}} className={`text-lg font-bold py-4 px-14 rounded-sm ${activetab==="Admin"?"bg-[#000] text-white":"bg-[#a6aeb9]"}`}>Admin</button>
          </div>
            <div>
            <label className="block mb-2 text-lg font-bold" htmlFor="">Email:</label> 
            <input type="email" className="py-3 w-full rounded-sm outline-none px-2 mb-3"/>
            </div>
            <div>
            <label className="block mb-2 text-lg font-bold" htmlFor="">Password:</label> 
            <input type="Password" className="py-3 w-full rounded-sm outline-none px-2 mb-3"/>
            </div>
            <button className="w-full py-3 my-4 rounded-md text-white text-xl bg-[#475569]">Login</button>
            <p className="text-center text-xl my-1">Don't have an account? <Link to="/register" className="text-green-900 hover:underline">Register</Link> </p>
      </div>
    </div>
  );
};

export default Login;
