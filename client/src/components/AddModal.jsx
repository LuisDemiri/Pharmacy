import React, { useState } from "react";
import { Button, Input, Modal } from "antd";
import "./AddModal.css";
import axios from "axios";

const AddModal = ({ isOpen, setIsModalOpen }) => {
  const [prdName, setPrdName] = useState("");
  const [description, setDescription] = useState("");
  const [imgUrl, setImgUrl] = useState("");

  const handleOk = async () => {
    let product = {
      name: prdName,
      description: description,
      picUrl: imgUrl,
    };
    try {
      await axios
        .post("http://localhost:5000/api/product/create", product)
        .then(window.location.reload());
    } catch (error) {
      console.log(error);
    }

    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Modal
        title="Add product"
        open={isOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Input
          className="add-inp"
          placeholder="Product name"
          onChange={(e) => setPrdName(e.target.value)}
        />
        <Input
          className="add-inp"
          placeholder="Description"
          onChange={(e) => setDescription(e.target.value)}
        />
        <Input
          className="add-inp"
          placeholder="Picture url"
          onChange={(e) => setImgUrl(e.target.value)}
        />
      </Modal>
    </>
  );
};

export default AddModal;
