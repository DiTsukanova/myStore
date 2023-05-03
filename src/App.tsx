import "./App.css";
import "./scss/app.scss";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart";
import FullPizza from "./pages/FullPizza";

function App() {
  return (
    <div className="wrapper">
        <Header />
        <div className="content">
          <div className="container">
            <Routes>
              <Route path="https://ditsukanova.github.io/myStore/" element={<Home/>} />
              <Route path="*" element={<NotFound/>} />
              <Route path="/pizza/:id" element={<FullPizza/>} />
              <Route path="/cart.html" element={<Cart />} />
            </Routes>
          </div>
        </div>
    </div>
  );
}
export default App;
