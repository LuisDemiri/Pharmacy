import React, { useState } from "react";
import { Button, Modal } from "antd";
import { IoIosRemoveCircleOutline } from "react-icons/io";
import { IoAddCircleOutline } from "react-icons/io5";
import "./CartModal.css";
import { useEffect } from "react";
import axios from "axios";

const CartModal = ({ isOpen, setIsModalOpen }) => {
  const [cartProducts, setCartProducts] = useState([]);
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const getCartProducts = async () => {
    var res = await axios.get("http://localhost:5000/api/buyproduct/getall");
    let userCartProducts = res.data.filter(
      (prod) => prod.user == localStorage.getItem("email")
    );
    console.log(userCartProducts, "userCartProducts");
    setCartProducts(userCartProducts);
  };

  useEffect(() => {
    getCartProducts();
  }, [setIsModalOpen]);

  return (
    <>
      <Modal title="Cart" open={isOpen} onOk={handleOk} onCancel={handleCancel}>
        {cartProducts.length > 0
          ? cartProducts?.map((prod) => {
              return (
                <div className="card-prod">
                  <img src={prod.picUrl} height={100} width={100} />
                  <div style={{ width: "130px" }}>{prod.name}</div>
                </div>
              );
            })
          : "No products added to Cart !"}
      </Modal>
    </>
  );
};

export default CartModal;
