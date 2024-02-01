import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import ProductCard from "./components/ProductCard";
import Footer from "./components/Footer";
import axios from "axios";
import Login from "./components/Login";
import Register from "./components/Registration";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [products, setProducts] = useState([]);
  const [user, setUser] = useState([]);
  const getProducts = async () => {
    var res = await axios.get("http://localhost:5000/api/product/getall");
    setProducts(res.data);
  };

  const getUser = async () => {
    var res = await axios.get("http://localhost:5000/api/users/get");
    let currentUser = res.data.find(
      (user) => user.email == localStorage.getItem("email")
    );
    setUser(currentUser);
  };
  useEffect(() => {
    getProducts();
    getUser();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Header role={user?.role} />
        <Routes>
          <Route
            path={"/"}
            element={
              <div className="products">
                {products?.map((prod) => {
                  return (
                    <ProductCard
                      prod={prod}
                      prodId={prod._id}
                      name={prod.name}
                      description={prod.description}
                      imgUrl={prod.picUrl}
                      role={user?.role}
                    />
                  );
                })}
              </div>
            }
          ></Route>
          <Route path={"/login"} element={<Login />}></Route>
          <Route path={"/register"} element={<Register />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
