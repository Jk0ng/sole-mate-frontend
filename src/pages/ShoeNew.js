import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { useNavigate } from "react-router-dom";

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
    <div>
      <Form>
        <FormGroup>
          <Label for="name">Name</Label>
          <Input
            id="name"
            name="name"
            placeholder="Shoe Name"
            type="text"
            onChange={handleChange}
            value={newShoe.name}
          />
        </FormGroup>
      </Form>
      <Form>
        <FormGroup>
          <Label for="age">Age</Label>
          <Input
            id="age"
            name="age"
            placeholder="Shoe Age"
            type="integer"
            onChange={handleChange}
            value={newShoe.age}
          />
        </FormGroup>
      </Form>
      <Form>
        <FormGroup>
          <Label for="enjoys">Enjoys</Label>
          <Input
            id="enjoys"
            name="enjoys"
            placeholder="Shoe Enjoys"
            type="text"
            onChange={handleChange}
            value={newShoe.enjoys}
          />
        </FormGroup>
      </Form>
      <Form>
        <FormGroup>
          <Label for="image">Image</Label>
          <Input
            id="image"
            name="image"
            placeholder="Shoe Picture"
            type="text"
            onChange={handleChange}
            value={newShoe.image}
          />
        </FormGroup>
      </Form>
      <Button onClick={handleSubmit}>Submit</Button>
    </div>
  );
};
export default ShoeNew;
