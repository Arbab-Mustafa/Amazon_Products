import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import ProductDetails from "./components/ProductDetails";
import Home from "./pages/Home";
import NotFound from "./components/NotFound";
import About from "./pages/About";
import Products from "./pages/Products";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
