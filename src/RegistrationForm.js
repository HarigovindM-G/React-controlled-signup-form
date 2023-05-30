import { useState } from "react";
import PasswordError from "./PasswordError";

const RegistrationForm =() =>{
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState({value:"",isTouched:false});
    
    const handleChange =(e) =>{
        setPassword({value:e.target.value ,isTouched:true})
    }
    const submitHandler=(e)=>{
        alert("Account created!  :)");
        clearForm();
    }
    const clearForm=()=>{
        setName("")
        setEmail("")
        setPassword("")
    }
    const getIsFormValid=()=>{
        if (name===""){
            return false;
        }
        if (email===""){
            return false;
        }
        if (password.value.length<8){
            return false;
        }
        else return true;
    }

    return(
    <form onSubmit={submitHandler}>
        <fieldset>
          <h2>Sign up</h2>
          <div className='Field'>
            <label htmlFor='name'>Name:</label>
            <input
              type='text'
              value={name}
              id="name"
              placeholder='Name'
              onChange={(e)=>setName(e.target.value)}
            />
          </div>
          <div className='Field'>
            <label htmlFor='email'>Email:</label>
            <input
              type='email'
              value={email}
              id="email"
              placeholder='Email address'
              onChange={(e)=>setEmail(e.target.value)}
            />
          </div>
          <div className='Field'>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password.value}
              placeholder='Password'
              onChange={handleChange}
            />
            {password.isTouched && password.value.length<8 ? 
                <PasswordError/>:null}
          </div>
          <button type="submit" onSubmit={(e)=>e.defaultPrevented} disabled={!getIsFormValid()}>Submit</button>

        </fieldset>
      </form>
    )
}
export default RegistrationForm;