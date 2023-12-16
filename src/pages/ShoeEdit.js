    import React, { useState } from "react";
    import { useParams, useNavigate } from "react-router-dom";
    import { Button, Form, FormGroup, Label, Input } from "reactstrap";
    import "./ShoeEdit.css"


    const ShoeEdit = ({ shoes, updateShoe }) => {

        const navigate = useNavigate();

        const { id } = useParams ()
        let currentShoe = shoes?.find((shoe) => shoe.id === +id)


        const [editShoe, setEditShoe] = useState({
            name: currentShoe?.name,
            age: currentShoe?.age,
            enjoys: currentShoe?.enjoys,
            image: currentShoe?.image
        })

        const handleChange = (e) => {
            setEditShoe({ ...editShoe, [e.target.name]: e.target.value })
        }

        const handleSubmit = () => {
            updateShoe(editShoe, currentShoe.id)
            navigate("/shoeindex")
        }
    return (
        <div className="background">
        <Form>
            <FormGroup>
            <Label for="name" className="labelName">Name</Label>
            <Input 
                id="name"
                name="name" 
                placeholder="Shoe Name" 
                type="text" 
                onChange={handleChange}
                value={editShoe.name}
                />
            </FormGroup>
        </Form>
        <Form>
            <FormGroup>
            <Label for="age" className="labelName">Price$</Label>
            <Input
                id="age"
                name="age"
                placeholder="Shoe Age"
                type="number"
                onChange={handleChange}
                value={editShoe.age}
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
                value={editShoe.enjoys}
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
                value={editShoe.image}
            />
            </FormGroup>
        </Form>
        <Button onClick={handleSubmit}>Submit updated shoe!</Button>
        </div>
    );
    };

    export default ShoeEdit