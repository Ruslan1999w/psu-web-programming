import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import { bookList } from "../actions/bookActions";
import './comp_style/article_list.scss';

export default function Articles_list(props) {
  const dispatch = useDispatch();
  const bookListing = useSelector(state => state?.book?.bookList);

  useEffect(() => {
      dispatch(bookList());
  }, [dispatch])

  return (
      <div>
          {bookListing &&
          bookListing.map((book) => {
              // {console.log(book)}
              const url = `/articles/${book._id}`;
              return(
              <div className="book">
                  <h1><Link to={url}>{book.bookName}</Link></h1>
                  <p>{book.description}</p>
              </div>
          )
          })
          }
      </div>
  )
}
