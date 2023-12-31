const mongoose = require('mongoose');
const agentSchema = require('./agent').Schema;
const schemaOptions = {
  strict: false,
  timestamps: true,
};

const ticketSchema = new mongoose.Schema( 
    {
        ticketid: {
            type: Int32Array,
            required: true,
        },

        status:{
            type: String,
            enum: ['active','inactive','pending'],
            default: 'pending',
            required: true,
        },

        opendedtime: {
            type: Date,
            default: Date.now,
            required: true,
        },

        closetime: {
            type: Date,
            default: Date.now,
            required: true,
        },

        categories: {
            type: String,
            required: true,
        },

        subcategories: {
            type: String,
            required: true,
        },

        assignedto: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'agent',
            required: true
        },

    });

    module.exports.Schema = ticketSchema;
   