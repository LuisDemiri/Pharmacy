import React, { useState } from "react";
import "./ProductCard.css";
import { Card, Button } from "antd";
import { ShoppingCartOutlined, EditOutlined } from "@ant-design/icons";
import axios from "axios";
import EditModal from "./EditModal";
const { Meta } = Card;
const ProductCard = ({ name, description, imgUrl, role, prodId, prod }) => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const handleAddToCart = async () => {
    let product = {
      user: localStorage.getItem("email"),
      name: name,
      description: description,
      picUrl: imgUrl,
    };
    try {
      await axios
        .post("http://localhost:5000/api/buyproduct/create", product)
        .then(window.location.reload());
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Card
        hoverable
        style={{
          width: 240,
        }}
        cover={<img alt="example" src={imgUrl} />}
        actions={[
          role == "admin" ? (
            <Button
              icon={<EditOutlined />}
              onClick={() => setIsEditModalOpen(true)}
            />
          ) : (
            <Button
              icon={<ShoppingCartOutlined />}
              onClick={() => handleAddToCart()}
            />
          ),
        ]}
      >
        <Meta title={name} description={description} />
      </Card>
      <EditModal
        prod={prod}
        isOpen={isEditModalOpen}
        isModalOpen={isEditModalOpen}
        setIsEditModalOpen={setIsEditModalOpen}
      />
    </>
  );
};

export default ProductCard;
