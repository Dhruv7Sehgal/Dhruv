import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Products from "./pages/Products";
import { Productdetails } from "./pages/Productdetails";
import { OrderOne } from "./pages/OrderOne";
import Signin from "./pages/Signin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Products />} />
          <Route path="productdetails/:id" element={<Productdetails />} />
          <Route path="order" element={<OrderOne />} />
        </Route>
        <Route path="signin" element={<Signin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
