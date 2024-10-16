import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import ProductDetails from "./components/ProductDetails";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
