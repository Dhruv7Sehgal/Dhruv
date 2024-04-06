import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Products from "./pages/Products";
import { Productdetails } from "./pages/Productdetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Products />} />
          <Route path="productdetails/:id" element={<Productdetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
