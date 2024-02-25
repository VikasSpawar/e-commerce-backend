// cartRoutes.js
const express = require('express');
const router = express.Router();
const cartSchema = require('../models/cartModel');
const { default: mongoose } = require('mongoose');

router.get('/', async (req, res) => {
    try {
      const cart = await cartSchema.find({})
      res.json(cart);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server Error' });
    }
  });
router.post('/add', async (req, res) => {
    try {
      const { product } = req.body;
      let cart = await cartSchema.findOne({_id:product._id});
     if(!cart){

        cartSchema.insertMany([{ ...product }]);
        
         
        }
        else{
            let id = new mongoose.Types.ObjectId()
          cartSchema.insertMany([{ ...product , _id:id}]);
           
           
        }
        res.status(201).json(cart);
   
      
      
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server Error' });
    }
  });
router.delete('/delete/:id', async (req, res) => {
   
    try {
      const { id } = req.params;
      let cart = await cartSchema.findOne({_id:id});
     if(cart){

      await  cartSchema.deleteOne({ _id:id });
        
         let cart = await cartSchema.find({})
             res.json(cart);
        }
        else{
            res.status(201).json({ message: 'Cart not found' });
        }

     
   
      
      
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server Error' });
    }
  });


module.exports = router;
