import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Shop from "./Pages/Shop";
import ProductDetails from "./Pages/Product-Details";
import HomeLayout from "./Layout/Home-Layout";
import Home from "./Pages/Home";
import AuthLayout from "./Layout/auth-layout";
import Login from "./Pages/auth/login";
import Register from "./Pages/auth/register";
import Women from "./Pages/Women";
import Men from "./Pages/Men";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeLayout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
             <Route path="/women" element={<Women />} />
              <Route path="men" element={<Men />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/shop/:id" element={<ProductDetails />} />
          </Route>

          <Route path="/auth" element={<AuthLayout />}>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
