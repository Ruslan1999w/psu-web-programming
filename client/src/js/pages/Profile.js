import React from 'react';
import {connect, useDispatch, useSelector} from 'react-redux';
import {  Link } from "react-router-dom";

export default function Profile(props) {
  const { history } = props;
  const user = useSelector(state => state?.user?.userData);
  const dispatch = useDispatch();
  console.log('user', user);

  return(
      <div>
          <br/>
          <br/>
          <br/>
          {
              <h1>Welcome {user?.login}</h1>
          }
          <br/>
          <br/>
          <br/>
          {user?.login==='admin' &&
              <h3>You have permission, to manage <Link to='/users'>  users list</Link></h3>
          }
      </div>
  )
}
