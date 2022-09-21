import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";


const Dashboard = () => {
  const [data, setdata] = useState([]);
  const history = useHistory();

 

  useEffect(() => {
    axios.get("https://api.github.com/users").then((res) => setdata(res.data));
   
  }, []);
console.log(data);
  return (
    <div>
      <h1>Usersdata</h1>
      {data.map((item, i) => {
        return (
          <div class="card mt-3 w-25">
            <div class="cardheader">
              <h4>{item.login}</h4>
            </div>
            <div class="cardbody">
              <img src={item.avatar_url} alt=""></img>
            </div>

            <div class="cardfooter mt-3 ">
              <button class="bg-primary text-white border-0 mb-2 mx-3" >
                {" "}
                Followers
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-people-fill text-white"
                  viewBox="0 0 16 16"
                >
                  <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                  <path
                    fill-rule="evenodd"
                    d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"
                  />
                  <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
                </svg>
              </button>

              <button class="bg-primary text-white border-0 mb-2 mx-3">
                {" "}
                Following
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-people-fill text-white"
                  viewBox="0 0 16 16"
                >
                  <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                  <path
                    fill-rule="evenodd"
                    d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"
                  />
                  <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
                </svg>
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Dashboard;