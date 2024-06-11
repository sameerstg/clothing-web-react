import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { DesignTool } from "./screens/designTool";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./screens/register";
import Payment from "./screens/payment";
import ProductCatalog from "./screens/productCatalog";
import "./index.css";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductCatalog/>} />
        <Route path="/design" element={<DesignTool />} />
        {/* <Route index element={<DesignTool />} /> */}
        <Route path="/register" element={<Register />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
