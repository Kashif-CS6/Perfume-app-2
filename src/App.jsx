import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./component/common/Navbar";
import Footer from "./component/common/footer";
import Home from "./component/Home";
import Products from "./component/product";
import ProductsId from "./component/productId.jsx";
import Screenshot from "./component/screenshot.jsx";
import Testers from "./component/testers.jsx";

function App() {
  const [purchases, setPurchases] = useState([]);
  return (
    <Router>
      <Navbar purchases={purchases} setPurchases={setPurchases} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/products"
          element={
            <Products purchases={purchases} setPurchases={setPurchases} />
          }
        />
        <Route
          path="/testers"
          element={
            <Testers purchases={purchases} setPurchases={setPurchases} />
          }
        />
        <Route
          path="/testers/:id"
          element={
            <Testers purchases={purchases} setPurchases={setPurchases} />
          }
        />
        <Route
          path="/products/:id"
          element={
            <ProductsId purchases={purchases} setPurchases={setPurchases} />
          }
        />
        <Route
          path="*"
          element={
            <h1 className="text-center text-red-600 font-[600] text-xl my-5">
              Page not Found!
            </h1>
          }
        />
        <Route path="/screen" element={<Screenshot purchases={purchases} />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
