import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import './Dashboard.css';
import FollowersList from "./Followers";


const Dashboard = () => {
 
  const api = "https://api.github.com/users";
  const [hidden,sethidden] = useState(false);
  const [todoList, setTodoList] = useState(null);
   const history = new useHistory();
   const [follow,setfollow] = useState([]);
   const [getlocal,setgetlocal] = useState("");
   const followerslist =(id) =>{
    
 history.push("/followers")
    // setfollow(todoList.id.followers_url);
   }
const getlocalvalue =()=>{
setgetlocal(localStorage.getItem("email"))
}

 useEffect(()=>{
  (async () =>{
 const todos = await axios.get(api);
    setTodoList(todos.data);
  })();
 getlocalvalue();
 },[])
 //console.log(todoList);


  // useEffect(() => {
  //   axios.get("https://api.github.com/users").then((result) => setdata(result.data));
   
  // }, []);
//console.log(data);
  return todoList? (
    
    <div className="text-center" data-testid="apirenderdata">
      <h1 className="mt-4" data-testid="username">{getlocal} </h1> <h1> Usersdata</h1>
      
      <button className="bg-danger border-0 text-light mx-3 mt-4" data-testid="button" onClick={() => sethidden(s=> !s)}>Hide Usersdata</button>
      
      {!hidden ?
      <div data-testid="ptag" className="row d-flex">
      {todoList.map((item, id) => {
        return (
          <div className="card card1 mt-3 w-25">
            <div className="cardheader">
              <h4 data-testid="user" key={id}>{item.login}</h4>
            </div>
            <div className="cardbody">
              <img className="img-fluid" src={item.avatar_url} alt=""></img>
            </div>

            <div className="cardfooter mt-3 ">
              <button className="bg-primary text-white border-0 mb-2 mx-3" data-testid="followbtn" onClick={followerslist}>
                Followers
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="17"
                  fill="currentColor"
                  className="bi bi-people-fill text-white"
                  viewBox="0 0 16 16"
                >
                  <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                  <path
                    fill-rule="evenodd"
                    d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"
                  />
                  <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
                </svg> */}
              </button>

              <button className="bg-primary text-white border-0 mb-2 mx-3" type="button"  data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                Following
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="17"
                  fill="currentColor"
                  className="bi bi-people-fill text-white"
                  viewBox="0 0 16 16"
                >
                  <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                  <path
                    fill-rule="evenodd"
                    d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"
                  />
                  <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
                </svg> */}
              </button>
     
            </div>
          </div>
        );
      })}
    
      </div>
      : null }
     
    </div>


      
    
  ):(
    <p>Loading.....</p>
  )
};
export default Dashboard;