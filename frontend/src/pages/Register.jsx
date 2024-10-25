import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
    const[activetab,setactivetab]=useState("User")
  return (
    <div className="flex justify-center items-center min-h-screen ">
      <div className=" bg-[#f1f1f1] min-w-[300px] py-4 px-8">
        <h2 className="font-bold text-center uppercase text-2xl my-2">Registration Form</h2>
        <div className="flex justify-center gap-4 my-4">
          <button onClick={()=>{setactivetab("User")}} className={`text-lg font-bold py-4 px-14 rounded-sm ${activetab==="User"?"bg-[#000] text-white":"bg-[#a6aeb9]"}`}>User</button>
          <button onClick={()=>{setactivetab("Creator")}} className={`text-lg font-bold py-4 px-14 rounded-sm ${activetab==="Creator"?"bg-[#000] text-white":"bg-[#a6aeb9]"}`}>Creator</button>
          <button onClick={()=>{setactivetab("Admin")}} className={`text-lg font-bold py-4 px-14 rounded-sm ${activetab==="Admin"?"bg-[#000] text-white":"bg-[#a6aeb9]"}`}>Admin</button>
          </div>
        <div>
            <label className="block mb-2 text-lg font-bold" htmlFor="">Name:</label> 
            <input type="text" className="py-3 w-full rounded-sm outline-none px-2 mb-3"/>
            </div>
            <div>
            <label className="block mb-2 text-lg font-bold" htmlFor="">Email:</label> 
            <input type="email" className="py-3 w-full rounded-sm outline-none px-2 mb-3"/>
            </div>
            <div>
            <label className="block mb-2 text-lg font-bold" htmlFor="">Age:</label> 
            <input type="text" className="py-3 w-full rounded-sm outline-none px-2 mb-3"/>
            </div>
            <div>
  <label className="block mb-2 text-lg font-bold">Gender:</label>
  
  <div className="flex items-center mb-3">
    <input
      type="radio"
      id="male"
      name="gender"
      value="Male"
      className="mr-2"
    />
    <label htmlFor="male" className="mr-4 text-xl">Male</label>

    <input
      type="radio"
      id="female"
      name="gender"
      value="Female"
      className="mr-2"
    />
    <label htmlFor="female" className="mr-4 text-xl">Female</label>

    <input
      type="radio"
      id="other"
      name="gender"
      value="Other"
      className="mr-2"
    />
    <label htmlFor="other" className="text-xl">Other</label>
  </div>
</div>

            <div>
            <label className="block mb-2 text-lg font-bold" htmlFor="">Password:</label> 
            <input type="Password" className="py-3 w-full rounded-sm outline-none px-2 mb-3"/>
            </div>
            <div>
            <label className="block mb-2 text-lg font-bold" htmlFor="">Confirm Password:</label> 
            <input type="password" className="py-3 w-full rounded-sm outline-none px-2 mb-3"/>
            </div>
            <button className="w-full py-3 my-3 rounded-md text-white text-xl bg-[#475569]">Register</button>
            <p className="text-center text-xl">Already an user? <Link to="/login" className="text-green-900 hover:underline">Login</Link> </p>
      </div>
    </div>
  );
};

export default Register;
