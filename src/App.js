import React, { useState } from "react";
import "./styles.css";

const myBookDB = {
  geography: [
    { name: "india and world geography", rating: "4.5/5" },
    { name: "geography of india", rating: "3.5" }
  ],

  insperational: [
    {
      name: "The Magic of Thinking Big by David J. Schwartz",
      rating: "5/5"
    },
    {
      name: "The 7 Habits of Highly Effective People by Stephen R. Covey",
      rating: "4.5/5"
    }
  ],
  business: [
    {
      name: "The Blue Zones Solution",
      rating: "5/5"
    },
    {
      name: "Eat, Drink, and Be Healthy",
      rating: "3/5"
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("business");
  function afterclick(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1>
        📚MY <span style={{ color: "blue" }}>Book</span>
      </h1>
      <p
        style={{
          fontSize: "smaller",
          fontWeight: "bold",
          color: "#818CF8"
        }}
      >
        {" "}
        Checkout my favorite books. Select a genre to get started{" "}
      </p>
      <div>
        {Object.keys(myBookDB).map((genre) => (
          <button
            onClick={() => afterclick(genre)}
            style={{
              cursor: "pointer",
              background: "#C7D2FE",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "none",
              margin: "1rem 0.3rem",
              boxShadow: "0 0 3px #4338CA"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {myBookDB[selectedGenre].map((book) => (
            <li
              key={book.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                // height:"50px",
                margin: "1rem auto ",
                borderRadius: "0.5rem",
                background: "#C7D2FE"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {book.name} </div>
              <div style={{ fontSize: "smaller" }}> {book.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
