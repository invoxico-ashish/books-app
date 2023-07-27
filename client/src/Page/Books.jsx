import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Books() {
  const [book, setBook] = useState([]);

  useEffect(() => {
    const FetchAllBooks = async () => {
      try {
        const res = await axios.get("http://localhost:8000/getbooks");
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    FetchAllBooks();
  }, []);

  return (
    <>
      <div className="app">
        <div className="books">
          {book.map((value) => (
            <div className="book" key={value.id}>
              {value.cover && <img src="" alt="" />}
              <h2>{value.title}</h2>
              <p>{value.description}</p>
              <span>{value.price}</span>
            </div>
          ))}
        </div>
        <button className="addHome">
          <Link to="/add" style={{ color: "inherit", textDecoration: "none" }}>
            Add New
          </Link>
        </button>
      </div>
    </>
  );
}

export default Books;
