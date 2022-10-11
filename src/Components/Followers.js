import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./Followers.css";
const FollowersList = (props) => {
    const { id, login } = props;
    const [todoList, setTodoList] = useState([]);
    useEffect(() => {
        (async () => {
            const follow = await axios.get("https://api.github.com/users/mojombo/followers");
            setTodoList(follow?.data);
        })();
    }, [])
    return (
        <div className="text-center">
            <h3 data-testid="followerslist">FollowersList</h3>
            <div className="text-center row">
                {
                    todoList.map((data, i) => {
                        return data ? (

                            <div className="card followerscard border-0 shadow">
                                <h4 data-testid="login" key={i}>{data.login}</h4>
                                <img data-testid="img" src={data.avatar_url} alt=""></img>
                            </div>
                        ) : (
                            <p className="text-center" data-testid="loading">Loading followers data.....</p>
                        );
                    })
                }
            </div>
        </div>
    )
}
export default FollowersList;