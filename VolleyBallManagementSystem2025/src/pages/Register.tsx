
import React, { useState } from "react";
import { supabase } from "../lib/supabaseClient";
function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message,setMessage] = useState("");
  
  const handleSubmit = async (event:React.FormEvent<HTMLFormElement>)=>{
    event.preventDefault();
    setMessage("");
    const {data,error} = await supabase.auth.signUp({
      email:email,
      password:password,
    });
    if(error){
      setMessage(error.message);
    }
    if(data){
      setMessage("Account created successfully");
    }
    setEmail("");
    setPassword("");

  };
return (
  <div>
    <h2>Register</h2>
    <br></br>
    {message && <span>{message}</span>}
    <form onSubmit = {handleSubmit}>

      <input
      onChange={(e)=>setEmail(e.target.value)}
      value={email}
      type="email" 
      placeholder="Email"
       required
         />
  <input
  onChange={(e)=>setPassword(e.target.value)}
  value={password}
   type="password" 
   placeholder="Password"
   required
  
   />
  <button type="submit">Create Account</button>
  </form>
  </div>
)

};



export default Register;