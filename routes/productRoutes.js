const mongoose = require('mongoose')
const express = require('express');
const productModel = require('../models/productModel');
const router = express.Router();


router.get('/', async (req, res) => {
    try {
      const products = await productModel.find();
      res.json(products);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server Error' });
    }
  });
router.get('/:id',async (req, res) => {
   
    try {
      const productId = req.params.id
      const product = await productModel.findOne({ _id: productId });
      if (!product) {
        return res.status(404).json({ message: 'Product not found' });
      }
      res.json(product);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server Error' });
    }
  })


module.exports = router;
