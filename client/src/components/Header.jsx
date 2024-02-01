import React, { useState } from "react";
import "./Header.css";
import { FaShoppingCart } from "react-icons/fa";
import logo from "../assets/pharm-logo.png";
import CartModal from "./CartModal";
import { Button } from "antd";
import { IoIosLogOut } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { MdOutlineAddBusiness } from "react-icons/md";
import AddModal from "./AddModal";

const Header = ({ role }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const navigate = useNavigate();

  const logOut = () => {
    localStorage.clear();
    navigate("/login");
    window.location.reload();
  };

  return (
    <div className="header">
      <div className="header-left">
        <img src={logo} alt="" height={40} />
        <h3>PharmaTech</h3>
      </div>

      <div className="header-right">
        {role == "user" && role && (
          <FaShoppingCart
            size={30}
            className="cart-icon"
            color="green"
            onClick={() => setIsModalOpen(true)}
          />
        )}
        {role == "admin" && role && (
          <Button
            icon={<MdOutlineAddBusiness />}
            title="Add Product"
            onClick={() => setIsAddModalOpen(true)}
          />
        )}
        <Button
          icon={<IoIosLogOut />}
          title="Logout"
          onClick={() => logOut()}
        />
      </div>

      <CartModal isOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      <AddModal isOpen={isAddModalOpen} setIsModalOpen={setIsAddModalOpen} />
    </div>
  );
};

export default Header;
