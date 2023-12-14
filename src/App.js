import "./App.css";
import React, { useState, useEffect } from "react";
import mockShoes from "./mockShoes";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Routes, Route, json } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import ShoeEdit from "./pages/ShoeEdit";
import ShoeIndex from "./pages/ShoeIndex";
import ShoeNew from "./pages/ShoeNew";
import ShoeShow from "./pages/ShoeShow";


const App = () => {
  const [shoes, setShoes] = useState([]);
  useEffect(() => {
    readShoes()
  }, [])
  const readShoes = () => {
    fetch("http://localhost:3000/shoes")
      .then((response) => response.json())
      .then((payload) => setShoes(payload))
      .catch((error) => console.log("Shoe read errors: ", error))
  }
  const createShoe = (shoe) => {
    fetch("http://localhost:3000/shoes", {
      body: JSON.stringify(shoe),
      headers: { "Content-type": "application/json" },
      method: "POST"
    })
      .then((response) => response.json())
      .then(() => readShoes())
      .catch((errors) => console.log("Shoe create errors:", errors))
  }

  const updateShoe = (selectedShoe, id) => {
    fetch(`http://localhost:3000/shoes/${id}`, {
      body: JSON.stringify(selectedShoe),
      headers: { "Content-Type": "application/json", },
      method: "PATCH",
    })
      .then((response) => response.json())
      .then(() => readShoes())
      .catch((error) => console.log("Shoe update errors", error))
  };
  const deleteShoe = (id) => {
    fetch(`http://localhost:3000/shoes/${id}`, {
      headers: {"Content-Type": "application/json",}, 
      method: "DELETE", 
    })
    .then((response)=> response.json())
    .then(()=>readShoes())
    .catch((errors)=>console.log("Delete a shoe errors", errors))
  }
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/shoeedit/:id"
          element={<ShoeEdit shoes={shoes} updateShoe={updateShoe} />}
        />
        <Route path="/shoeindex" element={<ShoeIndex shoes={shoes} />} />
        <Route path="/shoenew" element={<ShoeNew createShoe={createShoe} />} />
        <Route path="/shoeshow/:id" element={<ShoeShow shoes={shoes} deleteShoe={deleteShoe}/>} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};
export default App;
