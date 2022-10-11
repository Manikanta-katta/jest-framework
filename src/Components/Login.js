import { useHistory } from "react-router-dom";
import React, { useState } from "react";
import "./login.css"
const Login =() =>{
    const[email,setemail] = useState("");
    const[password,setpassword] = useState("");
    const [errormsg,seterrormsg] = useState("")
    const[passworderrormsg,setpassworderrormsg] = useState("");
    const [localvalue,setlocalvalue] = useState("");

    const history = useHistory();

    const Reset =()=>{
        seterrormsg(" ");
        setpassworderrormsg(" ");
        setemail("");
        setpassword("");
       
    }
    const localstore= () =>{
        setlocalvalue(localStorage.setItem("email",email))
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
           history.push('/dashboard');
           localstore();
     
       
        }
    }



    return(
        <div className="container">
              <div className="card logincard shadow text-center " > 
            <div className="cardheader mt-5">
               <h2>Loginpage</h2>
            </div>
            <div className="cardbody pt-5">
            <label>Email:</label>
            <input type="email" data-testid="emailid" placeholder ="enter your email" className="input mx-4" value={email} onChange={e=>setemail(e.target.value)}></input>
            <label className="text-danger">{errormsg}</label>
            </div>
         
            <div >
            <label>password:</label>
            <input type="password" placeholder="enter your password" className="input mx-4" value={password} onChange={e =>setpassword(e.target.value)}></input>
            <div > <label className="text-danger">{passworderrormsg}</label></div>
           
            </div>
            <div >
                <a href="/#">Forgot password?</a>
            </div>
            <div className="cardfooter mt-5 ">
                <button className="px-4 mx-4 bg-success border-0 "data-testid="submit" onClick={submit}>submit</button>
                <button className="px-4 mx-4 bg-warning border-0" data-testid="reset" onClick={Reset}>Reset</button>
            </div>
        </div>
        </div>
       
    )
}
export default Login;