import React, { useState } from "react";
import { Button, Input, Modal } from "antd";
// import "./EditModal.css";
import axios from "axios";

const EditModal = ({ isOpen, setIsEditModalOpen, prod }) => {
  const [prdName, setPrdName] = useState("");
  const [description, setDescription] = useState("");
  const [imgUrl, setImgUrl] = useState("");

  const handleOk = async () => {
    let product = {
      name: prdName != "" ? prdName : prod.name,
      description: description != "" ? description : prod.description,
      picUrl: imgUrl != "" ? imgUrl : prod.picUrl,
    };
    try {
      await axios
        .put("http://localhost:5000/api/product/edit/" + prod._id, product)
        .then(window.location.reload());
    } catch (error) {
      console.log(error);
    }

    setIsEditModalOpen(false);
  };
  const handleCancel = () => {
    setIsEditModalOpen(false);
  };
  return (
    <Modal
      title="Edit product"
      open={isOpen}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <Input
        value={prdName || prod.name}
        className="add-inp"
        placeholder="Product name"
        onChange={(e) => setPrdName(e.target.value)}
      />
      <Input
        value={description || prod.description}
        className="add-inp"
        placeholder="Description"
        onChange={(e) => setDescription(e.target.value)}
      />
      <Input
        value={imgUrl || prod.picUrl}
        className="add-inp"
        placeholder="Picture url"
        onChange={(e) => setImgUrl(e.target.value)}
      />
    </Modal>
  );
};

export default EditModal;
