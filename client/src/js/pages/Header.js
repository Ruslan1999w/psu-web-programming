import React, { useState, useEffect } from "react";
import {  Link } from "react-router-dom";

export default function Header(){
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    console.log('отправляю про');
    fetch('/authInfo', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
    })
        .then(response => response.json())
        .then(response => {
          if (response.auth) {
            setIsAuth(true);
          } else {
            setIsAuth(false);
          }
        });
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

            <li>
              <a>
                <Link to="/profile">Profile</Link>
              </a>
            </li>
          </ul>

          {isAuth ? (
              <Link to="/login">
                <input type="button" value="Log in" />
              </Link>
          ) : (
            <Link to="/">
              <input type="button" value="Log out" />
            </Link>
            )

          }

        </div>
      </div>
    );
}
