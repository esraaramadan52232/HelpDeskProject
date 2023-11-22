const mongoose = require('mongoose');
const productSchema = require('./productModel').Schema;
const schemaOptions = {
  strict: false,
  timestamps: true,
};
const userschema = new mongoose.Schema(
    {
        
    }
    );
    
    module.exports = mongoose.model('userModel', userschema);