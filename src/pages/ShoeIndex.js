import React, { useState } from "react";
import { Card, CardBody, CardTitle, CardSubtitle, Button } from "reactstrap";
import { NavLink } from "react-router-dom";
import "../App.css"


// As a user, I can see a page that lists of all the cat names.
// As a user, I can see a page featuring all the information for one cat.
// As a user, I can click on a cat name and be taken to a page that shows me all the information about that cat.

const ShoeIndex = ({ shoes }) => {
  return (
    <div className="counters">
      <>
        {shoes?.map((shoe, index) => {
          return (
            <Card
              style={{
                width: "14rem",
              }}
              key={index}
            >
              <img
                alt={`profile of a cat named ${shoe.name}`}
                src={shoe.image}
              />
              <CardBody>
                <CardTitle tag="h5">{shoe.name}</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  Age: {shoe.age}
                </CardSubtitle>
                <button><NavLink to={`/shoeshow/${shoe.id}`} className="nav-link">See More Details</NavLink></button>
              </CardBody>
            </Card>
          )
        })}
      </>
    </div>
  );
};
export default ShoeIndex;
