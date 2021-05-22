import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import NoteCreate from './NoteCreate';
import './comp_style/article_retrieve.scss';
import Articles_retrieve_all_notes from './Articles_retrieve_all_notes';
import {useDispatch, useSelector} from "react-redux";
import {bookList} from "../actions/bookActions";
export default function Articles_retrieve(props) {
  const dispatch = useDispatch();
  const {history} = props;
  const bookListing = useSelector(state => state?.book?.bookList);
  // console.log(bookListing);
    const book = bookListing === undefined ? [] :  bookListing.filter((elem) => elem._id === '600c4a5ed0f3fa78d35e1026');
  console.log(book);
  useEffect(() => {
    dispatch(bookList());
  }, [dispatch])

  // console.log(history);

  return (
      <div>
        {book &&
        book.map((elem) => {
          return(
              <div className="book">
                <h1>{elem.bookName}</h1>
                <p>{elem.description}</p>
              </div>
          )
        })
        }
      </div>
  )
};
