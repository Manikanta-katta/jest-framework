
import React, { useState } from "react";
import "./login.css"
const Login =() =>{
    const[email,setemail] = useState("");
    const[password,setpassword] = useState("");
    const [errormsg,seterrormsg] = useState("")
    const[passworderrormsg,setpassworderrormsg] = useState("");

    const Reset =()=>{
        seterrormsg(" ");
        setpassworderrormsg(" ");
        setemail("");
        setpassword("");
       
    }
    const clearinputs =() =>{
        setemail("");
        setpassword("");
        
    }
  
    const submit =()=>{
        if(email ===""|| email == null){
        const msg ="please enter your email";
        seterrormsg(msg);
        } else if(password === "" || password == null){
            const msg2 ="please enter your password";
            setpassworderrormsg(msg2);
        }
       
        else {
           
           clearinputs();
        }
    }



    return(
        <div class="card shadow w-50 mt-5" > 
            <div class="cardheader mt-5">
               <h2>Loginpage</h2>
            </div>
            <div class="cardbody pt-5">
            <label>Email:</label>
            <input type="email" placeholder="enter your email" class="input mx-4" value={email} onChange={e=>setemail(e.target.value)}></input>
            <label class="text-danger">{errormsg}</label>
            </div>
         
            <div>
            <label>password:</label>
            <input type="password" placeholder="enter your password" class="input mx-4" value={password} onChange={e =>setpassword(e.target.value)}></input>
            <div> <label class="text-danger">{passworderrormsg}</label></div>
           
            </div>
            <div class="">
                <a href="/#">Forgot password?</a>
            </div>
            <div class="cardfooter mt-5 ">
                <button class="px-4 mx-4 bg-success border-0 "data-testid="submit" onClick={submit}>submit</button>
                <button class="px-4 mx-4 bg-warning border-0" data-testid="reset" onClick={Reset}>Reset</button>
            </div>
        </div>
    )
}
export default Login;