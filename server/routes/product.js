const express = require("express");
const router = express.Router();
const Product = require("../models/product");

router.post("/create",async(req,res)=>{
    Product.create(req.body)
    .then((newProduct) => res.json(newProduct))
    .catch((err) => res.status(400).json({ message: "Product not created!", err }));
})
router.get("/getall",async(req,res)=>{
    Product.find()
    .then((allProducts) => res.json(allProducts))
    .catch((err) => res.json({ message: "Missing products", err }));
})
router.put("/edit/:id",async(req,res)=>{
    Product.updateOne({ _id: req.params.id }, req.body, { new: true })
    .then((newProduct) => res.json(newProduct))
    .catch((err) => res.json({ message: "Couldn't edit product", err }));
})
router.delete("/delete",async(req,res)=>{
    Product.deleteOne({ _id: req.params.id })
    .then((deletedOne) => res.json(deletedOne))
    .catch((err) => res.json({ message: "Couldn't delete the project", err }));
})
module.exports = router