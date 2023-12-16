import React from "react";
import { useParams, NavLink } from "react-router-dom";
import { Button } from "reactstrap";
import "./ShoeShow.css"
// LEARN THIS PORTION

const ShoeShow = ({ shoes, deleteShoe }) => {
  // Creating a function that takes in an ID as parameters and returns the id info
  const { id } = useParams();

  // What does this do?
  let currentShoe = shoes?.find((shoe) => shoe.id === +id);
  return (
    <div className="containers">
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
        <h2>PRICE:${currentShoe?.age}</h2>
        <h2>BEST AT {currentShoe?.enjoys}</h2>
      </div>

      <NavLink to={`/shoeedit/${currentShoe?.id}`} className="nav-link">
        <Button>
          Edit Shoe Profile
        </Button>
      </NavLink>
      <NavLink to={"/shoeindex"}>
        <Button onClick={() => deleteShoe(currentShoe?.id)}>
          Delete
        </Button>
      </NavLink>
    </div>
  );
};

export default ShoeShow;
