import "./App.css";
import React, { useState } from "react";
import mockShoes from "./mockShoes";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import ShoeEdit from "./pages/ShoeEdit";
import ShoeIndex from "./pages/ShoeIndex";
import ShoeNew from "./pages/ShoeNew";
import ShoeShow from "./pages/ShoeShow";

const App = () => {
  const [shoes, setShoes] = useState(mockShoes);
  const createShoe = (shoe) => {
    console.log(shoe);
  };

  const updateShoe = (shoe, id) => {
    console.log("shoe:", shoe);
    console.log("id:", id);
  };

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<NotFound />} />
        <Route
          path="/shoeedit/:id"
          element={<ShoeEdit shoes={shoes} updateShoe={updateShoe} />}
        />
        <Route path="/shoeindex" element={<ShoeIndex shoes={shoes} />} />
        <Route path="/shoenew" element={<ShoeNew createShoe={createShoe} />} />
        <Route path="/shoeshow/:id" element={<ShoeShow shoes={shoes} />} />
      </Routes>
      <Footer />
    </>
  );
};
export default App;
