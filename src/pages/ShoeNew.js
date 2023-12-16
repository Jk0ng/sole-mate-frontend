import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { useNavigate } from "react-router-dom";
// import "./ShoeNew.css"

const ShoeNew = ({ createShoe }) => {
  const navigate = useNavigate();
  const [newShoe, setNewShoe] = useState({
    name: "",
    age: "",
    enjoys: "",
    image: "",
  });
  const handleChange = (e) => {
    setNewShoe({ ...newShoe, [e.target.name]: e.target.value });
  };
  const handleSubmit = () => {
    createShoe(newShoe);
    navigate("/shoeindex");
  };
  return (
    <div className="background-image">
      <div className="container">
        <Form>
          <FormGroup>
            <Label for="name" className="labelName">Name</Label>
            <Input
              id="name"
              name="name"
              placeholder="Shoe Name"
              type="text"
              onChange={handleChange}
              value={newShoe.name}
              className="inputbox"
            />
          </FormGroup>
        </Form>
        <Form>
          <FormGroup>
            <Label for="age" className="labelName">Price$</Label>
            <Input
              id="age"
              name="age"
              placeholder="Shoe Price"
              type="integer"
              onChange={handleChange}
              value={newShoe.age}
              className="inputbox"
            />
          </FormGroup>
        </Form>
        <Form>
          <FormGroup>
            <Label for="enjoys" className="labelName">Enjoys</Label>
            <Input
              id="enjoys"
              name="enjoys"
              placeholder="Shoe Enjoys"
              type="text"
              onChange={handleChange}
              value={newShoe.enjoys}
              className="inputbox"
            />
          </FormGroup>
        </Form>
        <Form>
          <FormGroup>
            <Label for="image" className="labelName">Image</Label>
            <Input
              id="image"
              name="image"
              placeholder="Shoe Picture"
              type="text"
              onChange={handleChange}
              value={newShoe.image}
              className="inputbox"
            />
          </FormGroup>
        </Form>
        <Button onClick={handleSubmit}>Submit</Button>
      </div>
    </div>
  );
};
export default ShoeNew;

