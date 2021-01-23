import React, {useEffect, useState} from "react";
import {  Link } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import { logout, getUser } from "../actions/userActions";

export default function Header(){
  const [isAuth, setIsAuth] = useState(false);
  const user = useSelector(state => state?.user?.userData?.login);
  const dispatch = useDispatch();
  console.log('user', user);
  useEffect(() => {
    dispatch(getUser());
    if (user !== undefined) {
      console.log('isAuth');
      setIsAuth(true);
    } else {
      console.log('not auth')
      setIsAuth(false);
    }
  })



    return (
      <div class="header">
        <div class="container">

          <ul>
            <li>
              <a>
                <Link to="/">Home</Link>
              </a>
            </li>

            <li>
              <a>
                <Link to="/about">About us</Link>
              </a>
            </li>
            {isAuth &&

              <li>
              <a>
              <Link to="/profile">Profile</Link>
              </a>
              </li>
            }
          </ul>

          {isAuth ? (
                  <Link to="/" onClick={() => dispatch(logout())}>
                    <input type="button" value="Log out" />
                  </Link>

          ) : (
              <Link to="/login">
                <input type="button" value="Log in" />
              </Link>
            )

          }

        </div>
      </div>
    );
}
