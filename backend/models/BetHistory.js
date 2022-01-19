const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const BetHistory = new Schema({
    amount: {
        type: Float32Array,
        default:0.0
    },
    fee: {
        type: Float32Array,
        default:0.0
    },
    totalAmount: {
        type: Float32Array,
        default:0.0
    },
    wallet_key: {
        type: String,
        default: Date.now
    },
    start_time: {
        type: Date,
        default: Date.now
    },
    end_time: {
        type: Date,
        default: Date.now
    },
    type: {
        type: String,
        default: Date.now
    }
});

module.exports = betHistory = mongoose.model("collection_red_history", BetHistory);