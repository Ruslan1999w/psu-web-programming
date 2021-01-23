import React, {useEffect} from "react";
import User_retrieve from "./User_retrieve";
import { Route, BrowserRouter, Link } from "react-router-dom";
import {getAllUsers} from "../actions/userActions";
import {useDispatch, useSelector} from "react-redux";
import './comp_style/user_list.scss';

export default  function User_list() {
    const userList = useSelector(state => state?.user?.userList);
    const dispatch = useDispatch();
    console.log(userList);
    useEffect(() => {
        console.log('dispatch getAllUsers');
        dispatch(getAllUsers());
    }, [dispatch]);

    return (
      <div class="wrapper">
          <div class="user_list">
              {userList &&
                  userList.map((user) => {
                      return(
                      <div className="user">
                          <Link to={`/users/${user.userId}`}> User Login: {user.login}</Link>
                          <p>password: {user.password} </p>
                      </div>
                      )
                  })
              })
              }
          </div>
      </div>
    );
};
