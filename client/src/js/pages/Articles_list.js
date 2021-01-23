import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import {useDispatch} from "react-redux";
import {bookList} from "../actions/bookActions";

export default function Articles_list(props) {
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(bookList());
  })

  return(
      <div>
        <h1>Aticle List</h1>
      </div>
  )
}
