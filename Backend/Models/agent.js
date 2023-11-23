const mongoose = require('mongoose');
//const userSchema = require('./user').Schema;

const schemaOptions = {
  strict: false,
  timestamps: true,
};

const agentSchema = new mongoose.Schema( 
    {
        agentid: {
            type: Int32Array,
           // ref : 
            required: true,
        },

        rating: {
            type: Int32Array,
            required: true,
        },

        mainmajor: {
            type: String,
            required: true
        },

        submajor: {
            type: String,
            required: true,
        },
        available: {
            type:Boolean,
            required: true,
        
             },

    });

    module.exports.Schema = agentSchema; 