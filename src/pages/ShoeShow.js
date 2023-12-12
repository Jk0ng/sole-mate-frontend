import React from "react";
import { useParams } from "react-router-dom";
// LEARN THIS PORTION

const ShoeShow = ({ shoes }) => {
  // Creating a function that takes in an ID as parameters and returns the id info
  const { id } = useParams();

  // What does this do?
  let currentShoe = shoes?.find((shoe) => shoe.id === +id);
  return (
    <div>
      <main className="shoe-show-cards">
        <div className="Shoe-Title">
            <h1>{currentShoe?.name}</h1>
        </div>

        {/* Created a tenery condition in which if current shoe === current shoe and true, do something. In this case show an image */}
        {currentShoe && (
          <>
            <img
              alt={`profile of a shoe named ${currentShoe.name}`}
              src={currentShoe.image}
              className="shoe-show-img"
            />
          </>
        )}
      </main>
      <div className="Shoe-footer-age">
        <h2>{currentShoe?.age}</h2>
        <h2>{currentShoe?.enjoys}</h2>
      </div>
    </div>
  );
};

export default ShoeShow;
